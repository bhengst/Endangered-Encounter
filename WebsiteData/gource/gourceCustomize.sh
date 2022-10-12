# Remove actions after a certain date (currently December SGX)
# cat gourceLog.txt | awk -F\| '$1<=1576108800' > gourceLog.temp
# sed -i.bak '/rexrainbow/d' ./gourceLog.temp
# mv gourceLog.temp gourceLog.txt
# rm gourceLog.temp.bak

# Setup Project Name
projName="My Endangered Friend - Source Code"

function fix {
  sed -i -- "s/$1/$2/g" gourceLog.txt
}

# Replace non human readable names with proper ones
fix "|Seth Berrier|" "|Prof. B|"
fix "|Ash|" "|Ashton Musielewicz|"
fix "|Brittany|" "|Brittany Hengst|"
fix "|heartsinge|" "|Lou Brown|"
