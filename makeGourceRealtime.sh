# Generate a fresh log
rm -f gourcelog.txt
gource --output-custom-log gourcelog.txt
source customizeGourceLog.sh

# Generate video and encode to MP4 all in one
gource	--1920x1080 \
	--auto-skip-seconds 1 \
	--seconds-per-day 5 \
	--max-file-lag 1 \
	--file-idle-time 0 \
	--max-files 0 \
	--bloom-intensity 1.5 \
  --title "${projName}" \
	--font-size 24 \
	--hide filenames,dirnames,mouse,progress \
	--date-format "%A, %B %d, %Y" \
	--multi-sampling \
	--caption-file gourceCaptions.txt \
	--caption-size 36 \
	--caption-duration 5 \
	gourcelog.txt
