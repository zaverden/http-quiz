@app
begin-app

@http
get /
post /
get /some/:id

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
