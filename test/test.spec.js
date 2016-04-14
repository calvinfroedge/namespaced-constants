import expect from 'expect'
import consts from '../src'

describe('consts', ()=>{
  it('Should allow us to define namespaced constants', ()=>{
    const FOO = consts('FOO')('BAR');
    expect(FOO.BAR).toBe('FOO_BAR');
  });

  it('Should now allow us to modify consts values, even if declared with let', ()=>{
    let FOO = consts('FOO')('BAR');
    expect(()=>{
      FOO.BAR = 'baz'
    }).toThrow(TypeError);
  });
})
