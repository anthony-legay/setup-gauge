export declare class Installer {
    private readonly _plugins;
    private readonly _version;
    private readonly gauge_repo_url;
    constructor(version: string, plugins: string);
    install(): Promise<void>;
    private installReleasedVersion;
    private installFromSource;
    private installPlugins;
    private unzipGaugeDownload;
    private getDownloadInfo;
    private getPlatform;
    private getExecutableArchitecture;
    private getDownloadArchitecture;
    private getPlugins;
}
export interface DownloadInfo {
    url: string;
    version: string;
}
