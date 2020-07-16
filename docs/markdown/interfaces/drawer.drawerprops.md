[react-utils](../README.md) › [Globals](../globals.md) › [Drawer](../modules/drawer.md) › [DrawerProps](drawer.drawerprops.md)

# Interface: DrawerProps

## Hierarchy

* **DrawerProps**

## Index

### Events

* [onClose](drawer.drawerprops.md#optional-onclose)
* [onCloseComplete](drawer.drawerprops.md#optional-onclosecomplete)
* [onOpen](drawer.drawerprops.md#optional-onopen)
* [onOpenComplete](drawer.drawerprops.md#optional-onopencomplete)

### Properties

* [backdropClassName](drawer.drawerprops.md#optional-backdropclassname)
* [closeOnBackdropClick](drawer.drawerprops.md#optional-closeonbackdropclick)
* [open](drawer.drawerprops.md#optional-open)
* [position](drawer.drawerprops.md#optional-position)
* [size](drawer.drawerprops.md#optional-size)

## Events

### `Optional` onClose

• **onClose**? : *undefined | function*

*Defined in [components/Drawer/index.tsx:42](https://github.com/ronaldborla/react-utils/blob/2402045/src/components/Drawer/index.tsx#L42)*

Callback to trigger when closing of the drawer has been requested

___

### `Optional` onCloseComplete

• **onCloseComplete**? : *undefined | function*

*Defined in [components/Drawer/index.tsx:47](https://github.com/ronaldborla/react-utils/blob/2402045/src/components/Drawer/index.tsx#L47)*

Callback to trigger when drawer has closed completely

___

### `Optional` onOpen

• **onOpen**? : *undefined | function*

*Defined in [components/Drawer/index.tsx:52](https://github.com/ronaldborla/react-utils/blob/2402045/src/components/Drawer/index.tsx#L52)*

Callback to trigger when drawer is opening

___

### `Optional` onOpenComplete

• **onOpenComplete**? : *undefined | function*

*Defined in [components/Drawer/index.tsx:57](https://github.com/ronaldborla/react-utils/blob/2402045/src/components/Drawer/index.tsx#L57)*

Callback to trigger when drawer has opened completely

## Properties

### `Optional` backdropClassName

• **backdropClassName**? : *undefined | string*

*Defined in [components/Drawer/index.tsx:31](https://github.com/ronaldborla/react-utils/blob/2402045/src/components/Drawer/index.tsx#L31)*

Sets the className of the backdrop

___

### `Optional` closeOnBackdropClick

• **closeOnBackdropClick**? : *undefined | false | true*

*Defined in [components/Drawer/index.tsx:37](https://github.com/ronaldborla/react-utils/blob/2402045/src/components/Drawer/index.tsx#L37)*

Sets whether to close the Drawer if user clicks on the backdrop<br />
Set to `false` to disable closing when backdrop is clicked

**`default`** `true`

___

### `Optional` open

• **open**? : *undefined | false | true*

*Defined in [components/Drawer/index.tsx:65](https://github.com/ronaldborla/react-utils/blob/2402045/src/components/Drawer/index.tsx#L65)*

Sets the open state of the drawer

- `true` - Opens the drawer
- `false` - Closes the drawer

**`default`** `false`

___

### `Optional` position

• **position**? : *"top" | "right" | "bottom" | "left"*

*Defined in [components/Drawer/index.tsx:75](https://github.com/ronaldborla/react-utils/blob/2402045/src/components/Drawer/index.tsx#L75)*

Specify the position of the drawer

- `top` - Ease drawer content from the top
- `right` - Ease drawer content from the right
- `bottom` - Ease drawer content from the bottom
- `left` - Ease drawer content from the left

**`default`** `right`

___

### `Optional` size

• **size**? : *"auto" | "cover"*

*Defined in [components/Drawer/index.tsx:83](https://github.com/ronaldborla/react-utils/blob/2402045/src/components/Drawer/index.tsx#L83)*

Specify the size of the drawer

- `auto` - Uses the size of the passed content children
- `cover` - Covers the whole screen

**`default`** `auto`
