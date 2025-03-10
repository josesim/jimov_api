// Copyright (c) 2023 JIMOV
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

//anime data return standard

//spanish providers

/**
 * The class contains the URLs of the cover image and banner of the
 * anime website
 * @author Zukaritasu
 * @see Episode
 * @see Anime
 */
export class Image {
  /**
   * The cover image of the anime (not to be confused with the banner),
   * the banner is horizontally oriented rectangular in diameter, while
   * the cover image is vertically oriented.
   * @type {string}
   */
  url;
  /**
   * The URL of the anime banner. Some websites may not use a banner
   * so this field may be null
   * @type {(string | null)}
   * @default null
   */
  banner = null;
  /**
   * @param {(string)} url image url
   * @param {(string | null)} banner banner url
   */
  constructor(url, banner) {
    this.url = url;
    this.banner = banner;
  }
}

/**************************************************************
 *                     EPISODE AND SERVERS                    *
 **************************************************************/

/**
 * Basic information of the server where the episode is hosted
 * @author Zukaritasu
 * @see Episode
 */
export class EpisodeServer {
  /**
   * The name of the server where the episode is hosted
   * @type {string}
   */
  name;
  /**
   * The URL of the chapter. Some anime pages contain the URL of the
   * episode encoded, it is up to the programmer to decode it.
   * @type {string}
   */
  url;
  /**
   * 
   * @param {string} name server name
   * @param {string} url server url
   */
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}

/**
 * This class represents the structure containing the general information
 * of an anime episode. It can also represent a movie, ova or onas.
 * @author Zukaritasu
 * @see EpisodeServer
 * @see Anime
 */
export class Episode {
  /**
   * The name of the anime with its chapter number
   * @type {string}
   */
  name;
  /**
   * The URL of the episode. This field cannot be null or undefined
   * @type {string}
   */
  url;
  /**
   * Episode number. If it is a movie, the default value is 1
   * @type {number}
   * @default 1
   */
  number = 1;
  /**
   * Servers where the chapter is hosted to watch the anime online
   * @type {EpisodeServer[]}
   */
  servers = [];
  /**
   * The video thumbnail in the last chapters view
   * @type {string}
   */
  image;
  /**
   * This function returns the episode number. Generally the episode
   * number is at the end of the string, otherwise the function returns 0.
   * @param {string} name - The name or title of the chapter containing the
   * chapter number
   * @returns Episode number
   */
  static getEpisodeNumber(name) {
    if (typeof name === 'string') {
      for (let i = name.length - 1; i >= 0; i--) {
        if (name[i] === ' ') {
          return parseInt(name.substring(i, name.length).trim());
        }
      }
    }
    return 0;
  }
}

/**************************************************************
 *                     ANIME INFO                             *
 **************************************************************/

/**
 * Specifies the anime climatic station
 * @readonly
 * @enum {String}
 */
export const ClimaticStation = {
  Summer: Symbol('summer'),
  Autumn: Symbol('autumn'),
  Winter: Symbol('winter'),
  Spring: Symbol('spring'),
}

/**
 * Anime chronology
 * @author Zukaritasu
 * @see Anime
 */
export class Chronology {
  /**
   * The name of the anime
   * @type {string}
   */
  name;
  /**
   * The URL of the anime. It can also refer to movies, ovas and onas.
   * @type {string}
   */
  url;
  /**
   * The cover image of the anime
   * @type {string}
   */
  image;
  /**
   * @param {(string)} name the name of anime
   * @param {(string)} url anime url
   * @param {(string)} image banner or image of the chronological anime
   */
  constructor(name, url, image /* image url! */) {
    this.name = name;
    this.url = url;
    this.image = image;
  }
}

/**
 * General information about an anime. The class contains information
 * that can be found on any anime website.
 * @author Zukaritasu
 * @see Episode
 * @see Image
 * @see Chronology
 * @see ClimaticStation
 */
export class Anime {
  /**
   * The name of the anime
   * @type {string}
   */
  name;
  /**
   * The URL of the anime
   * @type {string}
   */
  url;
  /**
   * Anime synopsis
   * @type {string}
   */
  synopsis;
  /**
   * The cover and banner of the anime
   * @type {Image}
   */
  image;
  /**
   * The year the anime was released
   * @type {number}
   * @default 0
   */
  year = 0;
  /**
   * Anime genres. Genres are defined by a text string in English or
   * Spanish depending on the location
   * @type {string[]}
   */
  genres = []
  /**
   * Climatic station from the anime. If the station is not defined then
   * the default value is null
   * @type {(ClimaticStation | null)}
   * @default null
   */
  station = null;
  /**
   * Specifies the chronological order of the anime
   * @type {Chronology[]}
   */
  chronology = [];
  /**
   * Anime episodes available. If the anime is on air it will only show the
   * available episodes, and if it is not on air it will show all the episodes.
   * @type {Episode[]}
   */
  episodes = [];
  /**
   * Specifies whether the anime is currently airing or has already aired
   * @type {boolean}
   * @default false
   */
  active = false;
}