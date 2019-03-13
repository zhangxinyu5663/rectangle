/* global chai describe Rectangle it: true */
var expect=chai.expect;  
describe('矩形计算器面积计算功能测试套件', function(){
  it('宽度和高度是整数', function(){
    var r = new Rectangle(4, 5);
    expect(r.area()).to.be.equal(20);               
  });

  it('宽度和高度是小数', function() {
    var r = new Rectangle(0.1, 0.2);
    expect(r.area()).to.be.equal(0.020000000000000004);               
  });

  it('宽度和高度是整数字符串', function() {
    var r = new Rectangle('4', '5');
    expect(r.area()).to.be.equal(20);               
  });

  it('宽度和高度都是特殊值 0', function() {
    var r = new Rectangle(0, 0);
    expect(r.area()).to.be.equal(0);               
  });

});
