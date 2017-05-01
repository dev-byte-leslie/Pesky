# Generate a fresh log
rm -f gourcelog.txt
gource --output-custom-log gourcelog.txt
source customizeGourceLog.sh

# Generate video and encode to MP4 all in one
gource	--1280x720 \
  --auto-skip-seconds 1 \
  --seconds-per-day 1.5 \
  --max-file-lag 1 \
  --file-idle-time 0 \
  --max-files 0 \
  --bloom-intensity 1.5 \
  --title "${projName}" \
  --font-size 48 \
  --hide filenames,dirnames,mouse,progress \
  --date-format "%B %d" \
  --multi-sampling \
  --caption-file gourceCaptions.txt \
  --caption-size 36 \
  --caption-duration 4 \
	-o - -r 30 \
	gourcelog.txt | \
ffmpeg  -y -r 30 \
	-f image2pipe -vcodec ppm \
	-i - -vcodec libx264 \
	-preset veryslow \
	-pix_fmt yuv420p \
	-crf 1 -threads 0 \
	-bf 0 gourceVideo.mp4
