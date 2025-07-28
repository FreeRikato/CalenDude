interface notifyRequest {
    email: string;
    apiKey: string;
}

interface notifyResponse {
    notify: boolean;
}

export { notifyRequest, notifyResponse };
