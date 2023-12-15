// import {test,expect} from 'vitest'
import {sum} from './index.ts'
test('first test',()=>{
        expect(true).toBe(true)
    }
)
test('sum test',()=>{
    expect(sum(1,2)).toBe(3)
})