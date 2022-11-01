function parseDomainName(url){
    return
    //replace the stuff upfront
    //splitting and grabbing first value
    url.replace('https://', '').replace('http://', '').replace('www.', '').split('.')[0]  
}