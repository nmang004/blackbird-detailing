#!/bin/bash

cd public/images/services

# Function to convert and categorize images
convert_images() {
    local brand=$1
    local pattern=$2

    for file in ${pattern}*.heic; do
        if [ -f "$file" ]; then
            # Clean filename for output
            clean_name=$(basename "$file" .heic | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g')

            case "$file" in
                *Interior*)
                    output_name="${brand,,}-interior-detail-${clean_name}.webp"
                    heif-convert "$file" "interior-detail/$output_name"
                    echo "Interior: $file -> $output_name"
                    ;;
                *Closeup*)
                    output_name="${brand,,}-closeup-detail-${clean_name}.webp"
                    heif-convert "$file" "full-detail/$output_name"
                    echo "Closeup: $file -> $output_name"
                    ;;
                *Detailed*|*Detail*)
                    output_name="${brand,,}-exterior-detailed-${clean_name}.webp"
                    heif-convert "$file" "full-detail/$output_name"
                    echo "Detailed: $file -> $output_name"
                    ;;
                *Wash*|*Being*|*Mid*)
                    output_name="${brand,,}-process-washing-${clean_name}.webp"
                    heif-convert "$file" "process/$output_name"
                    echo "Process: $file -> $output_name"
                    ;;
                *)
                    output_name="${brand,,}-portfolio-${clean_name}.webp"
                    heif-convert "$file" "portfolio/$output_name"
                    echo "Portfolio: $file -> $output_name"
                    ;;
            esac
        fi
    done
}

# Convert images by brand/type
convert_images "Tesla" "*Tesla*"
convert_images "Chevy" "*Chevy*"
convert_images "GMC" "*GMC*"
convert_images "Tahoe" "*Tahoe*"
convert_images "Benz" "*Benz*"
convert_images "Mercedes" "*Mercedes*"
convert_images "AlfaRomeo" "*Alfa*"

# Convert generic IMG files to portfolio
for file in IMG_*.heic; do
    if [ -f "$file" ]; then
        clean_name=$(basename "$file" .heic | tr '[:upper:]' '[:lower:]')
        output_name="portfolio-${clean_name}.webp"
        heif-convert "$file" "portfolio/$output_name"
        echo "Generic: $file -> $output_name"
    fi
done

echo "Conversion completed!"