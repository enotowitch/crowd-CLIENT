export default function replacePath(path) {
	return path.replace(/(.+)(?:\\)/, "") // * - C:\fakepath\
}