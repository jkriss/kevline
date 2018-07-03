const tap = require('tap')
const { parse } = require('../index')

tap.same(parse("fruit:apple"), { fruit: "apple" }, "simple unquoted key/value")
tap.same(parse('fruit:"Fuji apple"'), { fruit: "Fuji apple" }, "quoted value with spaces")
tap.same(parse('"fave fruit":"Fuji apple"'), { "fave fruit": "Fuji apple" }, "quoted key with spaces")
tap.same(parse('a:one b:two'), { a:"one", b:"two" }, "multiple items")
tap.same(parse('a:1'), { a:1 }, "correct number parsing")
tap.same(parse('list:[a:1 b:2, a:3 b:4]'), { list: [{a:1, b:2}, {a:3, b:4}] }, "lists")
tap.same(parse('list:[a:1 b:2, list:[a:3 b:4, a:5 b:6]]'), { list: [{a:1, b:2}, {list:[{a:3, b:4}, {a:5, b:6}]}] }, "nested lists")
tap.same(parse('pi:3.14'), { pi: 3.14 }, "allow floats")
tap.same(parse('slug:some-title_with-dashes'), { slug: 'some-title_with-dashes' }, "allow dashes and underscore in unquoted string")
tap.same(parse('date:2018-01-01'), { date: '2018-01-01' }, "parse date as string")
tap.same(parse('str:""'), { str:"" }, "handle empty strings")
tap.same(parse('list:[a, b]'), { list: ["a", "b"] }, "literal lists")