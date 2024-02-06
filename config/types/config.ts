export type BuildMode = 'development' | 'production' | 'none';

export interface BuildPaths {
    entry: string;
    html: string;
    build: string;
    src: string;
}

export interface BuildOptions {
    paths: BuildPaths;
    mode: BuildMode;
    isDev: boolean;
    port: number;
    apiURL: string;
}

export interface EnvOptions {
    port: number;
    mode: BuildMode;
    apiURL: string;
}
