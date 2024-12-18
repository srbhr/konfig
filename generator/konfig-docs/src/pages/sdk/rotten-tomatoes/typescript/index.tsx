import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function RottenTomatoesTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="rotten-tomatoes-typescript-sdk"
      metaDescription={`Rotten Tomatoes, home of the Tomatometer, is the most trusted measurement of quality for Movies & TV. The definitive site for Reviews, Trailers, Showtimes, and Tickets.`}
      company="Rotten Tomatoes"
      doesNotHaveApiDescription={true}
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rotten-tomatoes/logo.png"
      companyKebabCase="rotten-tomatoes"
      clientNameCamelCase="rottenTomatoes"
      homepage="developer.fandango.com/rotten_tomatoes"
      lastUpdated={new Date("2024-03-27T21:31:04.839Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rotten-tomatoes/favicon.png"
      contactUrl="https://github.com/mermade/mashery2openapi"
      contactEmail="mike.ralphson@gmail.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rotten-tomatoes/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["media","collaboration","social_media","reviews","trailers","showtimes","tickets"]}
      methods={[
  {
    "url": "/lists.json",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Top Level Lists",
    "typeScriptTag": "topLevelLists",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/lists/dvds.json",
    "method": "getDvds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Top Level Lists",
    "typeScriptTag": "topLevelLists",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/lists/dvds/current_releases.json",
    "method": "getCurrentReleases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DVD Lists",
    "typeScriptTag": "dvdLists",
    "description": "",
    "parameters": [
      {
        "name": "pageLimit",
        "schema": "string",
        "required": false,
        "description": "The amount of new release dvds to show per page",
        "default": "16"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "The selected page of current DVD releases",
        "default": "1"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Provides localized data for the selected country (https://developer.fandango.com/ if available. Otherwise, returns US data.",
        "default": "us"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/lists/dvds/new_releases.json",
    "method": "getNewReleasesJson",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DVD Lists",
    "typeScriptTag": "dvdLists",
    "description": "",
    "parameters": [
      {
        "name": "pageLimit",
        "schema": "string",
        "required": false,
        "description": "The amount of new release dvds to show per page",
        "default": "16"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "The selected page of new release DVDs",
        "default": "1"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Provides localized data for the selected country (https://developer.fandango.com/ if available. Otherwise, returns US data.",
        "default": "us"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/lists/dvds/top_rentals.json",
    "method": "getTopRentalsJson",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DVD Lists",
    "typeScriptTag": "dvdLists",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "Limits the number of top rentals returned",
        "default": "10"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Provides localized data for the selected country (https://developer.fandango.com/ if available. Otherwise, returns US data.",
        "default": "us"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/lists/dvds/upcoming.json",
    "method": "getUpcomingDvds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DVD Lists",
    "typeScriptTag": "dvdLists",
    "description": "",
    "parameters": [
      {
        "name": "pageLimit",
        "schema": "string",
        "required": false,
        "description": "The amount of upcoming dvds to show per page",
        "default": "16"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "The selected page of upcoming DVDs",
        "default": "1"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Provides localized data for the selected country (https://developer.fandango.com/ if available. Otherwise, returns US data.",
        "default": "us"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/lists/movies.json",
    "method": "getMoviesJson",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Top Level Lists",
    "typeScriptTag": "topLevelLists",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/lists/movies/box_office.json",
    "method": "getBoxOfficeJson",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Movie Lists",
    "typeScriptTag": "movieLists",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "Limits the number of movies returned",
        "default": "16"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Provides localized data for the selected country (https://developer.fandango.com/ if available. Otherwise, returns US data.",
        "default": "us"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/lists/movies/in_theaters.json",
    "method": "getIntheaterMovies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Movie Lists",
    "typeScriptTag": "movieLists",
    "description": "",
    "parameters": [
      {
        "name": "pageLimit",
        "schema": "string",
        "required": false,
        "description": "The amount of movies in theaters to show per page",
        "default": "16"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "The selected page of in theaters movies",
        "default": "1"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Provides localized data for the selected country (https://developer.fandango.com/ if available. Otherwise, returns US data.",
        "default": "us"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/lists/movies/opening.json",
    "method": "getOpeningMovies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Movie Lists",
    "typeScriptTag": "movieLists",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "Limits the number of opening movies returned",
        "default": "16"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Provides localized data for the selected country (https://developer.fandango.com/ if available. Otherwise, returns US data.",
        "default": "us"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/lists/movies/upcoming.json",
    "method": "getUpcomingMovies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Movie Lists",
    "typeScriptTag": "movieLists",
    "description": "",
    "parameters": [
      {
        "name": "pageLimit",
        "schema": "string",
        "required": false,
        "description": "The amount of upcoming movies to show per page",
        "default": "16"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "The selected page of upcoming movies",
        "default": "1"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Provides localized data for the selected country (https://developer.fandango.com/ if available. Otherwise, returns US data.",
        "default": "us"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/movie_alias.json",
    "method": "getMovieAliasInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Detailed Info",
    "typeScriptTag": "detailedInfo",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID",
        "default": "0031381"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Only supports imdb lookup at this time",
        "default": "imdb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/movies.json",
    "method": "moviesJson",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "The plain text search query to search for a movie. Remember to URI encode this!"
      },
      {
        "name": "pageLimit",
        "schema": "string",
        "required": false,
        "description": "The amount of movie search results to show per page",
        "default": "10"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "The selected page of movie search results",
        "default": "1"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/movies/{id}.json",
    "method": "getMovieByIdJson",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Detailed Info",
    "typeScriptTag": "detailedInfo",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID",
        "example": "ID",
        "default": "770672122"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/movies/{id}/cast.json",
    "method": "getMovieCast",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Detailed Info",
    "typeScriptTag": "detailedInfo",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID",
        "example": "ID",
        "default": "770672122"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/movies/{id}/clips.json",
    "method": "getClipById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Detailed Info",
    "typeScriptTag": "detailedInfo",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID",
        "example": "ID",
        "default": "770672122"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/movies/{id}/reviews.json",
    "method": "getMovieReviews",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Detailed Info",
    "typeScriptTag": "detailedInfo",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID",
        "example": "ID",
        "default": "770672122"
      },
      {
        "name": "reviewType",
        "schema": "string",
        "required": false,
        "description": "3 different review types are possible: 'all', 'top_critic' and 'dvd'. 'top_critic' shows all the Rotten Tomatoes designated top critics. 'dvd' pulls the reviews given on the DVD of the movie. 'all' as the name implies retrieves all reviews.",
        "default": "top_critic"
      },
      {
        "name": "pageLimit",
        "schema": "string",
        "required": false,
        "description": "The number of reviews to show per page",
        "default": "20"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "The selected page of reviews",
        "default": "1"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Provides localized data for the selected country (https://developer.fandango.com/ if available. Otherwise, returns US data.",
        "default": "us"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/movies/{id}/similar.json",
    "method": "findSimilarMovies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Detailed Info",
    "typeScriptTag": "detailedInfo",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID",
        "example": "ID",
        "default": "770672122"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "Limit the number of similar movies to show",
        "default": "5"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Rotten Tomatoes"
      apiBaseUrl="http://api.rottentomatoes.com/api/public/v1.0"
      apiVersion="1.0"
      endpoints={18}
      sdkMethods={18}
      schemas={0}
      parameters={36}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rotten-tomatoes/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/rotten-tomatoes/openapi.yaml"
      developerDocumentation="developer.fandango.com/"
    />
  );
}
  