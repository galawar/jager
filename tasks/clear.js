// plugins
import del from 'del';

// config
import paths from '../config/paths.js';

// clearing
export default () => {
	return del(paths.root);
}