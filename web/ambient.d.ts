declare module 'node:child_process' {
  export function exec(cmd: string, cb?: (err: Error | null, stdout: string) => void): void
  export function execSync(cmd: string, options?: any): string
}
