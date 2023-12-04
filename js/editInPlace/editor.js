/**
 * @func EditIntPlace
 * @param {string} id 元素id
 * @param {dom} parent 挂载点
 * @param {string} value 初始值
 * @author wxc
 * @date 2023/12/4
 */
function EditInPlace(id, parent, value) {
  this.id = id;
  this.parentElement = parent || document.body;
  this.value = value || 'default value';
  this.createElement(this.id);
  this.attachEvents();//绑定事件,绑定事件的目的是为了让用户可以编辑
}//构造函数 传入id和挂载点 以及初始值 生成元素
EditInPlace.prototype = {
  // 创建组件的dom，并挂载到挂载点上
  createElement: function (id) {
    // console.log(this,'---');
    // 动态创建了一个dom元素 并把他赋值给了this.containerElement (当前对象的)
    this.containerElement = document.createElement('div');
    // 创建了一个span节点
    this.staticElement = document.createElement('span');
    this.staticElement.innerHTML = this.value;
    this.containerElement.appendChild(this.staticElement);

    // 输入框的创建
    this.fieldElement = document.createElement('input');//创建一个input元素，用于输入
    this.fieldElement.type = 'text';//设置input元素的type为text
    this.fieldElement.value = this.value;//设置input元素的value
    this.containerElement.appendChild(this.fieldElement);

    // 创建保存按钮
    this.saveButton = document.createElement('input');//创建一个input元素，用于保存
    this.saveButton.type = 'button';//设置input元素的type为button
    this.saveButton.className = 'save';//设置input元素的class为save 用于css样式设置
    this.saveButton.value='Save';//设置input元素的value,显示的是Save
    this.containerElement.appendChild(this.saveButton);

    // 创建取消按钮
    this.cancelButton = document.createElement('input');//创建一个input元素，用于保存
    this.cancelButton.type = 'button';//设置input元素的type为button
    this.cancelButton.className = 'cancel';//设置input元素的class为save 用于css样式设置
    this.cancelButton.value='Cancel';//设置input元素的value,显示的是Save
    this.containerElement.appendChild(this.cancelButton);

    // 将containerElement挂载到父元素上
    this.parentElement.appendChild(this.containerElement);//给父节点添加子节点，DOM树
    this.convertToText();//将input元素隐藏，只显示文本,调用下面的方法
  },
  // 将编辑框及按钮隐藏起来，只显示文本状态
  // 切换到文本状态
  convertToText: function () {
    this.fieldElement.style.display = 'none';//将input元素隐藏
    this.saveButton.style.display = 'none';//将保存按钮隐藏
    this.cancelButton.style.display = 'none';//将取消按钮隐藏
    this.staticElement.style.display = 'inline';//将span元素显示,inline是行内元素
  },
  attachEvents: function () {
    // let that = this;//将this赋值给that,对象实例被保存下来了
    // this.staticElement.addEventListener('click', function () {//给span元素添加点击事件
    //   // this被覆盖
    //   console.log(that,that.cancelButton);//that是对象实例,that.cancelButton是取消按钮
      // 拿到指向对象的this 怎么办
    // })

    // 用箭头函数解决this指向问题
    // let that = this;
    // this.staticElement.addEventListener('click', () => {
    //   console.log(this,this.cancelButton);//this指向EditInPlace这个对象
    //   // that.convertToEditable();
    // });

    const fn = this.convertToEditable.bind(this);//将this绑定到convertToEditable方法上
    this.staticElement.addEventListener('click', fn); //给span元素添加点击事件

    this.cancelButton.addEventListener('click', this.convertToText.bind(this));//给取消按钮添加点击事件
    this.saveButton.addEventListener('click', this.save.bind(this))//给保存按钮添加点击事件
  },
  // 切换到编辑状态
  convertToEditable: function () {
    // console.log(this,this.cancelButton);//this指向EditInPlace这个对象
    this.fieldElement.style.display = 'inline';
    this.saveButton.style.display = 'inline';
    this.cancelButton.style.display = 'inline';
    this.staticElement.style.display = 'none';
  },
  save: function () {
    let value = this.fieldElement.value;
    this.value = value;
    this.staticElement.innerHTML = value;
    this.convertToText();
  }
}