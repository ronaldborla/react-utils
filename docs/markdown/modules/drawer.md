[react-utils](../README.md) › [Globals](../globals.md) › [Drawer](drawer.md)

# Module: Drawer

## Index

### Interfaces

* [DrawerProps](../interfaces/drawer.drawerprops.md)

### Functions

* [Drawer](drawer.md#drawer)

## Functions

###  Drawer

▸ **Drawer**(`props`: [DrawerProps](../interfaces/drawer.drawerprops.md) & HTMLAttributes‹HTMLElement›): *ReactElement*

*Defined in [components/Drawer/index.tsx:265](https://github.com/ronaldborla/react-utils/blob/2402045/src/components/Drawer/index.tsx#L265)*

## Drawer component

### Usage

Encloses any UI, component, or HTML block in a Drawer UI<br />
<br />
This component is normally paired with the `useState` React hook<br />
Define a boolean state that will identify the `open` status of the Drawer

```
const [open, setOpen] = useState(false);
```

On render, pass the `open` value to the `open` prop, and an `onClose` callback
that will revert the value of the `open` state to `false`<br />
<br />
Pass the content of the drawer as `children`. Take note that you may also need to
pass a button inside the content that should revert the Drawer back to its closed state

```
<Drawer
  onClose={() => {
    setOpen(false);
  }}
  open={open}
>
  <div className="wrapper">
    Content is passed as children<br />
    This may also contain a custom UI component or an
    <strong>HTML element</strong>
    <button
      onClick={() => {
        setOpen(false);
      }}
    >
      Close drawer
    </button>
  </div>
</Drawer>
```

Finally, add a mechanism to change the value of `open` state to `true`
to trigger the Drawer to open

```
<button
  onClick={() => {
    setOpen(true);
  }}
>
  Open drawer
</button>
```

Clicking on the button labeled `Open drawer` will open the drawer

### Overriding CSS/styles

It's possible to override the styling of the drawer and backdrop.
Simply wrap the Drawer component inside a container<br />
<br />
Using sass/scss:

```
Component:

<div className="drawer-container">
  <Drawer {...props}>
    {children}
  </Drawer>
</div>

Style:

.drawer-parent {
  .drawer-wrapper {
    ...Your wrapper CSS
  }

  .drawer-backdrop {
    ...Your backdrop CSS
  }

  .drawer-container {
    ...Your drawer container CSS
  }
}
```

You may alternatively pass a custom className for the backdrop and wrapper:

```
<Drawer
  backdropClassName="custom-backdrop-class"
  className="custom-drawer-class"
  {...props}
>
  {children}
</Drawer>
```

Since you now have a custom class name, you may freely add custom styling:

```
.custom-drawer-class {
  ...Your backdrop CSS

  .drawer-container {
    ...Your drawer container CSS
  }
}

.custom-backdrop-class {
  ...Your backdrop CSS
}
```

It's also possible to override styling using styled-components or emotion.
You only need to wrap the Drawer inside a styled component with nested CSS
definitions as demonstrated above

### Setting the backdrop color/opacity, transition duration, etc.

Since the backdrop color, transition settings, z-index, and other properties
are only defined in CSS, you may easily override these by overriding the styles.
Follow the instructions above under **Overriding CSS/styles**<br />
<br />
To change backdrop color:

```
.drawer-backdrop {
  background-color: red;
}
```

To change backdrop opacity (when open):

```
.drawer-backdrop {
  &.drawer-is-open {
    opacity: 0.4;
  }
}
```

To change transition duration (animation speed):

```
.drawer-backdrop,
.drawer-wrapper {
  transition-duration: 0.8s;
}
```

Note that when changing transition duration, both backdrop and wrapper must
have the same value. Otherwise, it may cause unexpected behaviors

**Parameters:**

Name | Type |
------ | ------ |
`props` | [DrawerProps](../interfaces/drawer.drawerprops.md) & HTMLAttributes‹HTMLElement› |

**Returns:** *ReactElement*
