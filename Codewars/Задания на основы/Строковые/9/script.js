var testStr = "Вчера я открил 5 сайтов: www.mysite.ru, https://my-super-fun.ru, www.mysite.com, http://supersite.ru и Biggsite.RU но вообще, мне больше нравится домен в зоне .ru"
var regV = /(https?:\/\/)?(www\.)?[a-z0-9-\.]{2,}\.ru/gi;
var result = testStr.match(regV);
for (var i = 0; i < result.length; i++) {
  document.write(result[i] + "<br />");
}