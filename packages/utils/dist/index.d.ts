export declare function greet(name: string): string;
export declare function formatResponse<T>(data: T, message: string): {
    success: boolean;
    message: string;
    data: T;
    timestamp: string;
};
export declare function generateId(): string;
export declare const constants: {
    readonly API_VERSION: "v1";
    readonly DEFAULT_TIMEOUT: 5000;
    readonly MAX_RETRIES: 3;
};
