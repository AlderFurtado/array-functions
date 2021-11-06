import {
  addBegin,
  addEnd,
  getByIndex,
  getByKeyValue,
  getFirst,
  getLast,
  removeByKey,
  removeByValue,
  removeFirst,
  removeLast,
  updateAllValue,
  updateValue
} from './operations-array-helper'
import faker from 'faker'

const LIMIT_SIZE_ARRAY_TEST = 3
const LAST_INDEX_ARRAY_TEST = 2
const LIMIT_AGE = 100

const mockArr = [1, 2, 3]
const mockValue = 4
const mockObj = { id: faker.datatype.uuid(), name: faker.name.firstName(), age: faker.datatype.number(LIMIT_AGE), isSelected: faker.datatype.boolean() }
const mockArrObjects = [
  { id: faker.datatype.uuid(), name: faker.name.firstName(), age: faker.datatype.number(LIMIT_AGE), isSelected: faker.datatype.boolean() },
  { id: faker.datatype.uuid(), name: faker.name.firstName(), age: faker.datatype.number(LIMIT_AGE), isSelected: faker.datatype.boolean() },
  { id: faker.datatype.uuid(), name: faker.name.firstName(), age: faker.datatype.number(LIMIT_AGE), isSelected: faker.datatype.boolean() }
]

describe("Add in begin", () => {
  test('array simple', () => {
    expect(addBegin(mockArr, mockValue)).toStrictEqual([mockValue, 1, 2, 3]);
  });

  test('array objects', () => {
    expect(addBegin(mockArrObjects, mockObj)).toStrictEqual([mockObj, ...mockArrObjects]);
  });
})

describe("Add in end", () => {
  test('array simple', () => {
    expect(addEnd(mockArr, mockValue)).toStrictEqual([1, 2, 3, mockValue]);
  });

  test('array objects', () => {
    expect(addEnd(mockArrObjects, mockObj)).toStrictEqual([...mockArrObjects, mockObj]);
  });
})


describe("Remove first", () => {
  test('array simple', () => {
    expect(removeFirst(mockArr)).toStrictEqual([2, 3]);
  });

  test('array object', () => {
    expect(removeFirst(mockArrObjects)).toStrictEqual([mockArrObjects[1], mockArrObjects[2]]);
  });
})

describe("Remove last", () => {
  test('array simple', () => {
    expect(removeLast(mockArr)).toStrictEqual([1, 2]);
  });

  test('array object', () => {
    expect(removeLast(mockArrObjects)).toStrictEqual([mockArrObjects[0], mockArrObjects[1]]);
  });
})

describe("Remove value/key", () => {
  test('array simple', () => {
    const mockValue = 3
    expect(removeByValue(mockArr, mockValue)).toStrictEqual([1, 2]);
  });

  test('array object', () => {
    const mockValue = mockArrObjects[LAST_INDEX_ARRAY_TEST].id
    expect(removeByKey(mockArrObjects, "id", mockValue)).toStrictEqual([mockArrObjects[0], mockArrObjects[1]]);
  });
})

describe("Get first element", () => {
  test('array simple', () => {
    expect(getFirst(mockArr)).toStrictEqual(mockArr[0])
  })

  test('array objects', () => {
    expect(getFirst(mockArrObjects)).toStrictEqual(mockArrObjects[0])
  })
})

describe("Get last element", () => {
  test('array simple', () => {
    expect(getLast(mockArr)).toStrictEqual(mockArr[LAST_INDEX_ARRAY_TEST])
  })

  test('array objects', () => {
    expect(getLast(mockArrObjects)).toStrictEqual(mockArrObjects[LAST_INDEX_ARRAY_TEST])
  })
})

describe("Get element by index", () => {
  test('array simple', () => {
    expect(getByIndex(mockArr, LAST_INDEX_ARRAY_TEST)).toStrictEqual(mockArr[LAST_INDEX_ARRAY_TEST])
  })

  test('array objects', () => {
    const mockValue = mockArrObjects[LAST_INDEX_ARRAY_TEST].id
    expect(getByKeyValue(mockArrObjects, "id", mockValue)).toStrictEqual(mockArrObjects[LAST_INDEX_ARRAY_TEST])
  })
})

describe("Update value", () => {
  test('array simple', () => {
    const mockArr = [1, 2, 3, 3, 4]
    const mockValue = 10
    expect(updateValue(mockArr, 3, mockValue)).toStrictEqual([1, 2, mockValue, 3, 4])
  })

  test('array objects', () => {
    const mock1 = { id: 1, name: "test", age: LIMIT_AGE, isSelected: false }
    const mock2 = { id: 2, name: "test", age: LIMIT_AGE, isSelected: false }
    const mock3 = { id: 3, name: "test", age: LIMIT_AGE, isSelected: false }

    const mockArrObjects = [mock1, mock2, mock3];
    const oldValue = mock1.id
    const newValue = 10

    expect(updateValue(mockArrObjects, oldValue, newValue, "id")).toStrictEqual([{ id: newValue, name: "test", age: LIMIT_AGE, isSelected: false }, mock2, mock3])
  })
})

describe("Update all value", () => {
  test('array simple', () => {
    const mockArr = [1, 2, 3, 3, 4]
    const mockValue = 10
    expect(updateAllValue(mockArr, 3, mockValue)).toStrictEqual([1, 2, 10, 10, 4])
  })

  test('array objects', () => {
    const mock1 = { id: 1, name: "test", age: LIMIT_AGE, isSelected: false }
    const mock2 = { id: 2, name: "test", age: LIMIT_AGE, isSelected: false }
    const mock3 = { id: 3, name: "test", age: LIMIT_AGE, isSelected: false }
    const mock4 = { id: 1, name: "test", age: LIMIT_AGE, isSelected: false }

    const mockArrObjects = [mock1, mock2, mock3, mock4];
    const oldValue = mock1.id
    const newValue = 10

    expect(updateAllValue(mockArrObjects, oldValue, newValue, "id"))
      .toStrictEqual([{ id: newValue, name: "test", age: LIMIT_AGE, isSelected: false }, mock2, mock3, { id: newValue, name: "test", age: LIMIT_AGE, isSelected: false }])
  })
})

