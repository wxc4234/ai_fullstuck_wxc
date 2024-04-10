
import { List, Tag ,Button} from 'antd';

// 子组件
const TotoItem = (props) => {

  return (
    <div>
      <List
        bordered
        dataSource={props.data}
        renderItem={(item,index) => (
          <List.Item>
            {item}
            {/* <Tag closeIcon onClose={() => props.onDelete(index)}>
              <span>删除</span>
            </Tag> */}
            <Button onClick={() => props.onDelete(index)}>删除</Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TotoItem;