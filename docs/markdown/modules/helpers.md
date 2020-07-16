[react-utils](../README.md) › [Globals](../globals.md) › [helpers](helpers.md)

# Module: helpers

## Index

### Functions

* [getBodyHeight](helpers.md#getbodyheight)
* [getBodySize](helpers.md#getbodysize)
* [getBodyWidth](helpers.md#getbodywidth)
* [getClassList](helpers.md#getclasslist)
* [getElementHeight](helpers.md#getelementheight)
* [getElementSize](helpers.md#getelementsize)
* [getElementWidth](helpers.md#getelementwidth)
* [getScrollValue](helpers.md#getscrollvalue)
* [getViewportHeight](helpers.md#getviewportheight)
* [getViewportSize](helpers.md#getviewportsize)
* [getViewportWidth](helpers.md#getviewportwidth)
* [hasClass](helpers.md#hasclass)
* [isAbsoluteUrl](helpers.md#isabsoluteurl)
* [toggleClass](helpers.md#toggleclass)

## Functions

###  getBodyHeight

▸ **getBodyHeight**(): *number*

*Defined in [helpers/getBodySize.ts:14](https://github.com/ronaldborla/react-utils/blob/2402045/src/helpers/getBodySize.ts#L14)*

Get the height of the HTML <body> element
This is used to calculate the total vertical size of the body

**Returns:** *number*

Height of body in integer

___

###  getBodySize

▸ **getBodySize**(): *[Size](../interfaces/types.size.md)*

*Defined in [helpers/getBodySize.ts:38](https://github.com/ronaldborla/react-utils/blob/2402045/src/helpers/getBodySize.ts#L38)*

Body size

**Returns:** *[Size](../interfaces/types.size.md)*

___

###  getBodyWidth

▸ **getBodyWidth**(): *number*

*Defined in [helpers/getBodySize.ts:27](https://github.com/ronaldborla/react-utils/blob/2402045/src/helpers/getBodySize.ts#L27)*

Get the width of the HTML <body> element
This is used to calculate the total horizontal size of the body

**Returns:** *number*

Width of body in integer

___

###  getClassList

▸ **getClassList**(`element`: HTMLElement): *string[]*

*Defined in [helpers/getClassList.ts:11](https://github.com/ronaldborla/react-utils/blob/2402045/src/helpers/getClassList.ts#L11)*

Get class list

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *string[]*

___

###  getElementHeight

▸ **getElementHeight**(`element`: HTMLElement): *number*

*Defined in [helpers/getElementSize.ts:11](https://github.com/ronaldborla/react-utils/blob/2402045/src/helpers/getElementSize.ts#L11)*

Element height

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *number*

___

###  getElementSize

▸ **getElementSize**(`element`: HTMLElement): *[Size](../interfaces/types.size.md)*

*Defined in [helpers/getElementSize.ts:33](https://github.com/ronaldborla/react-utils/blob/2402045/src/helpers/getElementSize.ts#L33)*

Element size

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *[Size](../interfaces/types.size.md)*

___

###  getElementWidth

▸ **getElementWidth**(`element`: HTMLElement): *number*

*Defined in [helpers/getElementSize.ts:22](https://github.com/ronaldborla/react-utils/blob/2402045/src/helpers/getElementSize.ts#L22)*

Element width

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *number*

___

###  getScrollValue

▸ **getScrollValue**(): *number*

*Defined in [helpers/getScrollValue.ts:9](https://github.com/ronaldborla/react-utils/blob/2402045/src/helpers/getScrollValue.ts#L9)*

Get scroll value

**Returns:** *number*

___

###  getViewportHeight

▸ **getViewportHeight**(): *number*

*Defined in [helpers/getViewportSize.ts:11](https://github.com/ronaldborla/react-utils/blob/2402045/src/helpers/getViewportSize.ts#L11)*

Get viewport height

**Returns:** *number*

___

###  getViewportSize

▸ **getViewportSize**(): *[Size](../interfaces/types.size.md)*

*Defined in [helpers/getViewportSize.ts:31](https://github.com/ronaldborla/react-utils/blob/2402045/src/helpers/getViewportSize.ts#L31)*

Get viewport size

**Returns:** *[Size](../interfaces/types.size.md)*

___

###  getViewportWidth

▸ **getViewportWidth**(): *number*

*Defined in [helpers/getViewportSize.ts:21](https://github.com/ronaldborla/react-utils/blob/2402045/src/helpers/getViewportSize.ts#L21)*

Get viewport width

**Returns:** *number*

___

###  hasClass

▸ **hasClass**(`element`: HTMLElement, `className`: string): *boolean*

*Defined in [helpers/hasClass.ts:11](https://github.com/ronaldborla/react-utils/blob/2402045/src/helpers/hasClass.ts#L11)*

Has class

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |
`className` | string |

**Returns:** *boolean*

___

###  isAbsoluteUrl

▸ **isAbsoluteUrl**(`url`: string): *boolean*

*Defined in [helpers/isAbsoluteUrl.ts:9](https://github.com/ronaldborla/react-utils/blob/2402045/src/helpers/isAbsoluteUrl.ts#L9)*

Check if url is absolute

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *boolean*

___

###  toggleClass

▸ **toggleClass**(`element`: HTMLElement, `className`: string, `add?`: undefined | false | true): *void*

*Defined in [helpers/toggleClass.ts:12](https://github.com/ronaldborla/react-utils/blob/2402045/src/helpers/toggleClass.ts#L12)*

Toggle element class

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |
`className` | string |
`add?` | undefined &#124; false &#124; true |

**Returns:** *void*
