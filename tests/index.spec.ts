// import {test,expect} from 'vitest'
import {sum} from './index'
import Hello from '../src/components/HelloWorld.vue'
test('first test',()=>{
        expect(true).toBe(true)
    }
)
test('sum test',()=>{
    expect(sum(1,2)).toBe(3)
})
test("Hello Component",()=>{
    console.log(Hello)
})