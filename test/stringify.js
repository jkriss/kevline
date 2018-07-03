const tap = require('tap')
const { stringify } = require('../index')

tap.same(stringify({ fruit: "apple" }), "fruit:apple" , "simple unquoted key/value")
tap.same(stringify({ fruit: "Fuji apple" }), 'fruit:"Fuji apple"', "quoted value with spaces")
tap.same(stringify({ "fave fruit": "Fuji apple" }), '"fave fruit":"Fuji apple"', "quoted key with spaces")
tap.same(stringify({ a:"one", b:"two" }), 'a:one b:two', "multiple items")
tap.same( stringify({ a:1 }), 'a:1', "correct number parsing")
tap.same(stringify({ list: [{a:1, b:2}, {a:3, b:4}] }), 'list:[a:1 b:2, a:3 b:4]', "lists")
tap.same(stringify({ list: [{a:1, b:2}, {list:[{a:3, b:4}, {a:5, b:6}]}] }), 'list:[a:1 b:2, list:[a:3 b:4, a:5 b:6]]', "nested lists")
tap.same(stringify({ pi: 3.14 }), 'pi:3.14', "Allow floats")
tap.same(stringify({ slug: 'some-title_with-dashes' }), 'slug:some-title_with-dashes', "allow dashes and underscore in unquoted string")
tap.same(stringify({ date: '2018-01-01' }), 'date:2018-01-01', "parse date as string")
// tap.same(parse('list:[a,b]'), { list: ["a", "b"] }, "literal lists")