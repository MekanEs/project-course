export type BuildMode = 'development' | 'production';

export interface BuildPaths {
  entry: string
  html: string
  build: string
  src: string
}

export interface BuildOptions {
  paths: BuildPaths
  mode: BuildMode
  isDev: boolean
  port: number
}

export interface EnvOptions {
  port: number
  mode: BuildMode
}
