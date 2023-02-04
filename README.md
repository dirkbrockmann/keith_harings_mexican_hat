# Keith Haring's Mexican Hat

This explorable illustrates one of the basic principles of spontaneous pattern formation: local excitation and long-range inhibition. 

The explorable is part of the [**Complexity Exporables Collection**](https://www.complexity-explorables.org). For more information about the system and its behavior consult the explorable
> [**"Keith Haring's Mexican Hat" - Pattern Formation by Local Excitation and Long-Range Inhibition**](https://www.complexity-explorables.org/explorables/keith-harings-mexican-hat/)

## Installation & Use

Out of the box you can use the explorable in a basic `index.html` file like this

```html
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<script src="https://cdn.jsdelivr.net/npm/@explorables/keith_harings_mexican_hat"></script>
	</head>
	<body class="avenir pa3 pa5-ns tj">
	    <div id="explorable_container"></div>
	</body>
	<script type="text/javascript">
		keith_harings_mexican_hat.load("explorable_container")
	</script>
</html>
```
The header `<script>` tag loads the bundle, the `<div>` in the document is the container in which the explorable gets anchored when the function `keith_harings_mexican_hat.load()` gets executed at the bottom. The `load` function needs the `<div>` container `id` as an agument.

## Installing the whole package locally

Clone repository:

```shell
git clone https://github.com/dirkbrockmann/keith_harings_mexican_hat.git
```


Go to the directory, install, build and show using `npm`:

1. `cd keith_harings_mexican_hat`
2. `npm install`
3. `npm run build`
4. `npm run show`



