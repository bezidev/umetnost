cd public/images
for i in *.jpg; do
    ffmpeg -i "$i" "${i%.*}.webp";
    convert "${i%.*}.webp" -resize 200x200 "small/${i%.*}.webp";
    rm $i;
done

