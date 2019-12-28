IFS="." read -ra VER <<< $(<VERSION)
for i in "${VER[@]}"; do
  echo $i
done

new_version=$((${VER[2]} + 1))
version=${VER[0]}"."${VER[1]}"."$new_version
echo $version > VERSION
