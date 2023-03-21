
import { type NextConfig } from "next";

export const withTopo = (nextConfig: NextConfig = {}) => {
  const webpackConfig: NextConfig["webpack"] = (config, options) => {
    const { webpack } = options;
    config.plugins = [...config.plugins, new webpack.NormalModuleReplacementPlugin(/^@codeday\/topo\/Atom$/, '@codeday/topo/Next/Atom')]
    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options)
    }
    return config
  }
  return Object.assign({}, nextConfig, { webpack: webpackConfig })
}