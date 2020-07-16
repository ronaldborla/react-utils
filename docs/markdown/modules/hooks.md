[react-utils](../README.md) › [Globals](../globals.md) › [hooks](hooks.md)

# Module: hooks

## Index

### Functions

* [useEventListener](hooks.md#useeventlistener)
* [useOnResize](hooks.md#useonresize)
* [useOnScroll](hooks.md#useonscroll)

## Functions

###  useEventListener

▸ **useEventListener**(`element`: HTMLElement | Window | null, `events`: string[], `callback`: function, `options?`: boolean | AddEventListenerOptions): *void*

*Defined in [hooks/useEventListener.ts:11](https://github.com/ronaldborla/react-utils/blob/2402045/src/hooks/useEventListener.ts#L11)*

Listen for an HTML event

**Parameters:**

▪ **element**: *HTMLElement | Window | null*

▪ **events**: *string[]*

▪ **callback**: *function*

▸ (`event`: Event): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | Event |

▪`Optional`  **options**: *boolean | AddEventListenerOptions*

**Returns:** *void*

___

###  useOnResize

▸ **useOnResize**(`callback`: function): *void*

*Defined in [hooks/useOnResize.ts:14](https://github.com/ronaldborla/react-utils/blob/2402045/src/hooks/useOnResize.ts#L14)*

On resize hook

**Parameters:**

▪ **callback**: *function*

▸ (`size`: [Size](../interfaces/types.size.md), `event`: Event): *void*

**Parameters:**

Name | Type |
------ | ------ |
`size` | [Size](../interfaces/types.size.md) |
`event` | Event |

**Returns:** *void*

___

###  useOnScroll

▸ **useOnScroll**(`callback`: function): *void*

*Defined in [hooks/useOnScroll.ts:12](https://github.com/ronaldborla/react-utils/blob/2402045/src/hooks/useOnScroll.ts#L12)*

Scroll listener

**Parameters:**

▪ **callback**: *function*

▸ (`value`: number, `event`: Event | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`event` | Event &#124; null |

**Returns:** *void*
