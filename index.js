const data = process.argv.reduce(function (accumulator, item) {
	if (item.startsWith("--")) {
		const splitIndex = item.indexOf("=");
		const key = item.slice(2, splitIndex);

		if (key.length > 0) {
			const newData = {};
			const value = item.slice(splitIndex + 1);

			switch (key) {
				case "age": {
					newData[key] = Number(value);
					break;
				}
				default: {
					newData[key] = value;
					break;
				}
			}

			return { ...accumulator, ...newData };
		}
	}

	return accumulator;
}, {});

console.log(data);
