

## Slideshow

You can use the Slideshow component to automatically transition between a bunch of photos. It takes:

- `srcs` - An array of sources for the images.
- `duration` - The duration to show an image.
- `transitionDuration` - The duration the fade lasts between images.
- `resize` - The resizing method to use to normalize the image size, either `'cover'` or `'contain'`.
- (and, as always, all the normal Box props)

<Canvas>
  <Story name="Slideshow">
    <Slideshow
      width={256}
      height={256}
      duration={5}
      srcs={['https://placekitten.com/256/256', 'https://picsum.photos/256/256']}
    >Hi there</Slideshow>
  </Story>
</Canvas>
