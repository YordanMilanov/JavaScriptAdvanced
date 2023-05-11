function requestValidator(request) {
    const {method, uri, version, message} = request;
    const validMethod = ["GET" , "POST", "DELETE", "CONNECT"];
    const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"]
    const errorMessage = (typeOfParam) => `Invalid request header: Invalid ${typeOfParam}`
    console.log(validMethod.includes(method));
    if(!validMethod.includes(method) || !method) {
        throw new Error(errorMessage('Method'))
    }
    console.log(validVersions.includes(version))
    if(!validVersions.includes(version) || !version) {
        throw new Error(errorMessage('Version'))
    }


    return request;
}

requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',   
    version: 'HTP/1.1',   
    message: ''   
    })