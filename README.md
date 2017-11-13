# Daily Descent


### site spec
the site collects posts from a network of writers. each writer has a dat archive that contains a writer.json file, described below. the list of writers is found in the site's staff.json file


#### staff.json
```json
{
	"staff": [{
			"name": "cblgh",
			"dat": "dat://7f2ef715c36b6cd226102192ba220c73384c32e4beb49601fb3f5bba4719e0c5"
		},
		{
			"name": "neauoire",
			"dat": "dat://2f21e3c122ef0f2555d3a99497710cd875c7b0383f998a2d37c02c042d598485"
		}
	]
}
```

### staff writer format
each staff writer has a feed of posts, an array, according to the following format

##### writer.json
```json
{
	"posts": [{
		"timestamp": 1507846216271,
		"link": "dat://beakerbrowser.com",
		"title": "BeakerBrowser 0.8 is here",
		"short": "The long-awaited beaker 0.8 has arrived!etcetcetc ",
		"tags": ["beaker", "dat", "browsers"],
		"long": "BeakerBrowser, the only browser with dat protocol support as of now, has landed their 0.8 version which contains many new features and p2p ideas.[...]",
		"media": "/path/to/media || choose_random"
	}]
}
```


### cross-posting to rotonde
posting to a rotonde account can be done by a bot that reads the posts by each author in writers.json. the bot then posts the link, the short desc and the media.


### staff guidelines
i think [wikitribune](https://beta.wikitribune.com) has a good idea on how to manage something like this
* [How to write](https://beta.wikitribune.com/project/how-to-write-a-piece-of-journalism-for-wikitribune/)
* [Style guide](https://beta.wikitribune.com/project/wikiproject-style-guide/)
