namespace http{
    interface Header{
        key: String,
        value: String
    }
    interface get_options {
        headers: Header[],
        
    }
}