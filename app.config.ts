export default ({ config }) => {
  return {
    version: process.env.SOME_ENV || config.version,
    orientation: config.orientation,
    icon: config.icon,
    name: config.name,
    slug: config.slug,
    ios: {
      bundleIdentifier: 'com.modezov.connectfresh',
      supportsTablet: true,
      requireFullScreen: true,
      buildNumber: "9",
    }
  }
}
