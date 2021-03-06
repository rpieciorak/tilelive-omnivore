var fs = require('fs');
var path = require('path');

module.exports = ['csv', 'geojson', 'multi-geojson', 'gpx', 'kml', 'shp', 'tif']
  .reduce(function(memo, type) {
    memo[type] = fs.readFileSync(path.resolve(__dirname, type + '.mapnik.xml'), 'utf8');
    if (!(type === 'gpx' || type === 'kml' || type === 'multi-geojson'))
      memo[type + '.named'] = fs.readFileSync(path.resolve(__dirname, type + '.mapnik.named.xml'), 'utf8');
    return memo;
  }, {});
