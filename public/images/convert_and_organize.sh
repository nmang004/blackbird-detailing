#!/bin/bash

# Blackbird Detailing Image Conversion Script
# Converts HEIC files to WebP and organizes them by content

echo "Starting HEIC to WebP conversion and organization..."

# Create output directory if it doesn't exist
mkdir -p converted_webp

# Function to convert and resize image
convert_image() {
    local input_file="$1"
    local output_file="$2"
    local quality="$3"
    local max_width="$4"

    magick "$input_file" -auto-orient -strip -quality "$quality" -resize "${max_width}x>" -format webp "$output_file"

    if [ $? -eq 0 ]; then
        echo "✓ Converted: $(basename "$input_file") -> $(basename "$output_file")"
    else
        echo "✗ Failed to convert: $(basename "$input_file")"
        return 1
    fi
}

# Function to categorize and rename based on filename patterns
categorize_image() {
    local filename="$1"
    local basename_lower=$(echo "$(basename "$filename" .heic)" | tr '[:upper:]' '[:lower:]')

    # Determine category and generate proper name
    if [[ "$basename_lower" =~ "interior" ]]; then
        echo "interior-detailing"
    elif [[ "$basename_lower" =~ "detailed" ]] || [[ "$basename_lower" =~ "closeup" ]]; then
        echo "ceramic-coating"
    elif [[ "$basename_lower" =~ "wash" ]] || [[ "$basename_lower" =~ "process" ]]; then
        echo "process"
    else
        echo "general"
    fi
}

# Function to extract vehicle make from filename
extract_vehicle_make() {
    local filename="$1"
    local basename_lower=$(echo "$(basename "$filename" .heic)" | tr '[:upper:]' '[:lower:]')

    if [[ "$basename_lower" =~ "porsche" ]]; then echo "porsche"
    elif [[ "$basename_lower" =~ "bmw" ]]; then echo "bmw"
    elif [[ "$basename_lower" =~ "tesla" ]]; then echo "tesla"
    elif [[ "$basename_lower" =~ "ford" ]]; then echo "ford"
    elif [[ "$basename_lower" =~ "chevy" ]] || [[ "$basename_lower" =~ "chevrolet" ]]; then echo "chevrolet"
    elif [[ "$basename_lower" =~ "aston" ]]; then echo "aston-martin"
    elif [[ "$basename_lower" =~ "alfa" ]]; then echo "alfa-romeo"
    elif [[ "$basename_lower" =~ "benz" ]] || [[ "$basename_lower" =~ "mercedes" ]]; then echo "mercedes-benz"
    elif [[ "$basename_lower" =~ "tahoe" ]]; then echo "chevrolet-tahoe"
    elif [[ "$basename_lower" =~ "gmc" ]]; then echo "gmc"
    else echo "unknown"
    fi
}

# Function to generate proper filename
generate_filename() {
    local original_file="$1"
    local category="$2"
    local vehicle_make="$3"
    local counter="$4"

    local basename_lower=$(echo "$(basename "$original_file" .heic)" | tr '[:upper:]' '[:lower:]')

    # Check for before/after indicators
    local suffix=""
    if [[ "$basename_lower" =~ "before" ]]; then
        suffix="-before"
    elif [[ "$basename_lower" =~ "after" ]]; then
        suffix="-after"
    elif [[ "$basename_lower" =~ "closeup" ]] || [[ "$basename_lower" =~ "detail" ]]; then
        suffix="-detail"
    elif [[ "$basename_lower" =~ "front" ]]; then
        suffix="-front"
    elif [[ "$basename_lower" =~ "blue" ]]; then
        suffix="-blue"
    elif [[ "$basename_lower" =~ "red" ]]; then
        suffix="-red"
    elif [[ "$basename_lower" =~ "black" ]]; then
        suffix="-black"
    elif [[ "$basename_lower" =~ "wash" ]]; then
        suffix="-washing"
    fi

    # Generate filename
    if [ "$vehicle_make" = "unknown" ]; then
        echo "${category}-${counter}${suffix}.webp"
    else
        echo "${vehicle_make}-${category}${suffix}-${counter}.webp"
    fi
}

# Process all HEIC files in the services directory
cd services
counter=1

for file in *.heic *.HEIC; do
    if [ -f "$file" ]; then
        echo "Processing: $file"

        # Determine category and vehicle make
        category=$(categorize_image "$file")
        vehicle_make=$(extract_vehicle_make "$file")

        # Generate new filename
        new_filename=$(generate_filename "$file" "$category" "$vehicle_make" "$counter")

        # Convert to different sizes
        # Large size (1200px max width) - for detailed viewing
        convert_image "$file" "../portfolio/before-after/${category}/${new_filename%.*}-large.webp" 85 1200

        # Medium size (800px max width) - for portfolio grid
        convert_image "$file" "../portfolio/before-after/${category}/${new_filename}" 85 800

        # Thumbnail size (400px max width) - for thumbnails
        convert_image "$file" "../portfolio/thumbnails/${new_filename%.*}-thumb.webp" 80 400

        # Service page size (600px max width) - for service pages
        convert_image "$file" "../services/${category}/${new_filename}" 85 600

        counter=$((counter + 1))
    fi
done

echo "Conversion complete! Images have been organized in the following directories:"
echo "- ../portfolio/before-after/ (categorized by service)"
echo "- ../portfolio/thumbnails/ (thumbnail versions)"
echo "- ../services/ (categorized by service type)"
echo ""
echo "Total files processed: $((counter - 1))"