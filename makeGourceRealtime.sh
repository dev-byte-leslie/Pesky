# Generate a fresh log
rm -f gourcelog.txt
gource --output-custom-log gourcelog.txt
source customizeGourceLog.sh

# Directly Visualize
gource	--1280x720 \
	--auto-skip-seconds 1 \
	--seconds-per-day 1.5 \
	--max-file-lag 1 \
	--file-idle-time 0 \
	--max-files 0 \
	--bloom-intensity 1.5 \
  --title "${projName}" \
	--title-size 48 --font-size 24 \
	--hide filenames,dirnames,mouse,progress \
	--date-format "%B %d" \
  --title-height-pad -10 \
  --date-height-pad 10 \
	--multi-sampling \
	--caption-file gourceCaptions.txt \
	--caption-size 36 \
	--caption-duration 4 \
  --swap-title-and-date \
	gourcelog.txt
