source "https://rubygems.org"

gem "jekyll-paginate"

# Pinned to the version GitHub Pages runs in production.
# https://pages.github.com/versions/
gem "github-pages", "~> 232", group: :jekyll_plugins

# Ruby 3+ no longer bundles WEBrick; Jekyll needs it for `bundle exec jekyll serve`.
gem "webrick", "~> 1.8"

# Ruby 3.3+ ships these as bundled gems, so they must be listed explicitly.
# (Jekyll 3.10 needs csv; its other deps pull in base64/bigdecimal.)
gem "csv"
gem "base64"
gem "bigdecimal"
