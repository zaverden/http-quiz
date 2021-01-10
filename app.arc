@app
begin-app

@http
get /
get /some/:id

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
