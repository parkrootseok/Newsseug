export function devServer(devServerConfig) {
  return {
    ...devServerConfig,
    port: 3000, //
    liveReload: true,
    host: '0.0.0.0',
    allowedHosts: 'all',
    open: true,
    compress: true,
    client: {
      overlay: true,
      webSocketURL: {
        hostname: '0.0.0.0',
        port: '80',
        pathname: '/ws',
      },
    },
  };
}
