#!/bin/bash

# Organize converted WebP images into proper categories
echo "Organizing converted images..."

cd converted

# Create category directories
mkdir -p ../portfolio/before-after/ceramic-coating
mkdir -p ../portfolio/before-after/interior-detailing
mkdir -p ../portfolio/before-after/paint-correction
mkdir -p ../portfolio/before-after/process
mkdir -p ../portfolio/thumbnails
mkdir -p ../services/ceramic-coating
mkdir -p ../services/interior-detailing
mkdir -p ../services/paint-correction
mkdir -p ../services/paint-protection-film
mkdir -p ../vehicles/luxury
mkdir -p ../vehicles/sports
mkdir -p ../vehicles/everyday

# Function to copy and create thumbnail
copy_and_thumbnail() {
    local source="$1"
    local dest_dir="$2"
    local filename="$3"

    # Copy to destination
    cp "$source" "$dest_dir/$filename"

    # Create thumbnail (400px max width)
    magick "$source" -resize 400x> "../portfolio/thumbnails/$filename"

    echo "✓ Organized: $filename"
}

# Organize by content type
counter=1

# Ceramic coating/detailed images
for file in img_*detailed*.webp img_*closeup*.webp; do
    if [ -f "$file" ]; then
        # Extract vehicle info from filename
        if [[ "$file" =~ porsche ]]; then
            new_name="porsche-ceramic-coating-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/ceramic-coating" "$new_name"
            copy_and_thumbnail "$file" "../services/ceramic-coating" "$new_name"
            copy_and_thumbnail "$file" "../vehicles/luxury" "$new_name"
        elif [[ "$file" =~ bmw ]]; then
            new_name="bmw-ceramic-coating-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/ceramic-coating" "$new_name"
            copy_and_thumbnail "$file" "../services/ceramic-coating" "$new_name"
            copy_and_thumbnail "$file" "../vehicles/luxury" "$new_name"
        elif [[ "$file" =~ tesla ]]; then
            new_name="tesla-ceramic-coating-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/ceramic-coating" "$new_name"
            copy_and_thumbnail "$file" "../services/ceramic-coating" "$new_name"
            copy_and_thumbnail "$file" "../vehicles/luxury" "$new_name"
        elif [[ "$file" =~ ford ]]; then
            new_name="ford-ceramic-coating-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/ceramic-coating" "$new_name"
            copy_and_thumbnail "$file" "../services/ceramic-coating" "$new_name"
            copy_and_thumbnail "$file" "../vehicles/everyday" "$new_name"
        elif [[ "$file" =~ chevy ]]; then
            new_name="chevrolet-ceramic-coating-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/ceramic-coating" "$new_name"
            copy_and_thumbnail "$file" "../services/ceramic-coating" "$new_name"
            copy_and_thumbnail "$file" "../vehicles/everyday" "$new_name"
        elif [[ "$file" =~ tahoe ]]; then
            new_name="chevrolet-tahoe-ceramic-coating-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/ceramic-coating" "$new_name"
            copy_and_thumbnail "$file" "../services/ceramic-coating" "$new_name"
            copy_and_thumbnail "$file" "../vehicles/everyday" "$new_name"
        elif [[ "$file" =~ benz ]]; then
            new_name="mercedes-benz-ceramic-coating-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/ceramic-coating" "$new_name"
            copy_and_thumbnail "$file" "../services/ceramic-coating" "$new_name"
            copy_and_thumbnail "$file" "../vehicles/luxury" "$new_name"
        elif [[ "$file" =~ aston ]]; then
            new_name="aston-martin-ceramic-coating-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/ceramic-coating" "$new_name"
            copy_and_thumbnail "$file" "../services/ceramic-coating" "$new_name"
            copy_and_thumbnail "$file" "../vehicles/luxury" "$new_name"
        elif [[ "$file" =~ alfa ]]; then
            new_name="alfa-romeo-ceramic-coating-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/ceramic-coating" "$new_name"
            copy_and_thumbnail "$file" "../services/ceramic-coating" "$new_name"
            copy_and_thumbnail "$file" "../vehicles/sports" "$new_name"
        elif [[ "$file" =~ gmc ]]; then
            new_name="gmc-ceramic-coating-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/ceramic-coating" "$new_name"
            copy_and_thumbnail "$file" "../services/ceramic-coating" "$new_name"
            copy_and_thumbnail "$file" "../vehicles/everyday" "$new_name"
        elif [[ "$file" =~ genesis ]]; then
            new_name="genesis-ceramic-coating-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/ceramic-coating" "$new_name"
            copy_and_thumbnail "$file" "../services/ceramic-coating" "$new_name"
            copy_and_thumbnail "$file" "../vehicles/luxury" "$new_name"
        else
            new_name="ceramic-coating-detail-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/ceramic-coating" "$new_name"
            copy_and_thumbnail "$file" "../services/ceramic-coating" "$new_name"
        fi
        counter=$((counter + 1))
    fi
done

# Interior detailing images
counter=1
for file in img_*interior*.webp; do
    if [ -f "$file" ]; then
        if [[ "$file" =~ porsche ]]; then
            new_name="porsche-interior-detail-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/interior-detailing" "$new_name"
            copy_and_thumbnail "$file" "../services/interior-detailing" "$new_name"
            copy_and_thumbnail "$file" "../vehicles/luxury" "$new_name"
        elif [[ "$file" =~ bmw ]]; then
            new_name="bmw-interior-detail-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/interior-detailing" "$new_name"
            copy_and_thumbnail "$file" "../services/interior-detailing" "$new_name"
            copy_and_thumbnail "$file" "../vehicles/luxury" "$new_name"
        elif [[ "$file" =~ benz ]]; then
            new_name="mercedes-benz-interior-detail-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/interior-detailing" "$new_name"
            copy_and_thumbnail "$file" "../services/interior-detailing" "$new_name"
            copy_and_thumbnail "$file" "../vehicles/luxury" "$new_name"
        elif [[ "$file" =~ ferrari ]]; then
            new_name="ferrari-interior-detail-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/interior-detailing" "$new_name"
            copy_and_thumbnail "$file" "../services/interior-detailing" "$new_name"
            copy_and_thumbnail "$file" "../vehicles/sports" "$new_name"
        elif [[ "$file" =~ ford ]]; then
            new_name="ford-interior-detail-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/interior-detailing" "$new_name"
            copy_and_thumbnail "$file" "../services/interior-detailing" "$new_name"
            copy_and_thumbnail "$file" "../vehicles/everyday" "$new_name"
        elif [[ "$file" =~ chevy ]]; then
            new_name="chevrolet-interior-detail-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/interior-detailing" "$new_name"
            copy_and_thumbnail "$file" "../services/interior-detailing" "$new_name"
            copy_and_thumbnail "$file" "../vehicles/everyday" "$new_name"
        elif [[ "$file" =~ gmc ]]; then
            new_name="gmc-interior-detail-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/interior-detailing" "$new_name"
            copy_and_thumbnail "$file" "../services/interior-detailing" "$new_name"
            copy_and_thumbnail "$file" "../vehicles/everyday" "$new_name"
        elif [[ "$file" =~ lexus ]]; then
            new_name="lexus-interior-detail-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/interior-detailing" "$new_name"
            copy_and_thumbnail "$file" "../services/interior-detailing" "$new_name"
            copy_and_thumbnail "$file" "../vehicles/luxury" "$new_name"
        elif [[ "$file" =~ alfa ]]; then
            new_name="alfa-romeo-interior-detail-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/interior-detailing" "$new_name"
            copy_and_thumbnail "$file" "../services/interior-detailing" "$new_name"
            copy_and_thumbnail "$file" "../vehicles/sports" "$new_name"
        else
            new_name="interior-detail-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/interior-detailing" "$new_name"
            copy_and_thumbnail "$file" "../services/interior-detailing" "$new_name"
        fi
        counter=$((counter + 1))
    fi
done

# Process/washing images
counter=1
for file in img_*wash*.webp img_*mobile*.webp; do
    if [ -f "$file" ]; then
        if [[ "$file" =~ benz ]]; then
            new_name="mercedes-benz-process-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/process" "$new_name"
        elif [[ "$file" =~ mobile ]]; then
            new_name="mobile-detailing-unit-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/process" "$new_name"
        else
            new_name="detailing-process-${counter}.webp"
            copy_and_thumbnail "$file" "../portfolio/before-after/process" "$new_name"
        fi
        counter=$((counter + 1))
    fi
done

echo "Organization complete!"
echo "Images have been organized into:"
echo "- portfolio/before-after/ (by service type)"
echo "- services/ (by service type)"
echo "- vehicles/ (by vehicle category)"
echo "- portfolio/thumbnails/ (thumbnail versions of all images)"