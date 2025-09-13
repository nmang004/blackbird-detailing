#!/bin/bash

# Simple HEIC to WebP conversion script
echo "Converting HEIC files to WebP format..."

cd services

# First, let's just convert all files to a single directory to test
mkdir -p ../converted

counter=1
for file in *.heic *.HEIC; do
    if [ -f "$file" ]; then
        echo "Converting: $file"

        # Get base name without extension and make lowercase
        base_name=$(basename "$file" .heic | tr '[:upper:]' '[:lower:]')
        base_name=$(basename "$base_name" .HEIC)

        # Simple naming: just use the original name with counter
        output_name="img_${counter}_${base_name}.webp"

        # Convert to WebP with good quality
        if magick "$file" -auto-orient -strip -quality 85 -format webp "../converted/$output_name"; then
            echo "✓ Successfully converted to: $output_name"
        else
            echo "✗ Failed to convert: $file"
        fi

        counter=$((counter + 1))
    fi
done

echo "Conversion complete! Check the 'converted' directory."
echo "Total files processed: $((counter - 1))"