import * as postController from './post.controller';

const router = express.Router();
import {filter, paginate, sort} from './post.middleware';

// 根据restful GET
router.get(
  '/posts',
  sort,
  filter,
  paginate,
 postController.index
)