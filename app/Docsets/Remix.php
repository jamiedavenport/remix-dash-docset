<?php

namespace App\Docsets;

use Godbout\DashDocsetBuilder\Docsets\BaseDocset;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Wa72\HtmlPageDom\HtmlPageCrawler;

class Remix extends BaseDocset
{
    public const CODE = 'remix';
    public const NAME = 'Remix';
    public const URL = 'remix.run';
    public const INDEX = 'docs/en/v1.html';
    public const PLAYGROUND = '';
    public const ICON_16 = 'favicon-light.1.png';
    public const ICON_32 = 'favicon-light.1.png';
    public const EXTERNAL_DOMAINS = [];

    public function entries(string $file): Collection
    {
        // TODO: Get from the internet
        $crawler = HtmlPageCrawler::create(Storage::get($file));

        $entries = collect();

        $entries = $entries->union($this->guideEntries($crawler, $file));

        return $entries;
    }

    protected function guideEntries(HtmlPageCrawler $crawler, string $file)
    {
        $entries = collect();

        if (Str::contains($file, "{$this->index()}")) {
            print("Getting links from file " . $file . " Index:" . $this->index() . "\n");

            $crawler->filter('nav a')->each(function (HtmlPageCrawler $node) use ($entries) {
                print("Pushing link with content " . $node->text() . " and href " . $node->attr('href') . "\n");
                $path =  $this->url() . '/docs/en/' . $node->attr('href');
                print("Path " . $path . "\n");
                $entries->push([
                    'name' => trim($node->text()),
                    'type' => 'Guide', // TODO: Make this more specific
                    'path' => $path,
                ]);
            });
        }

        return $entries;
    }

    public function format(string $file): string
    {
        $crawler = HtmlPageCrawler::create(Storage::get($file));

        $this->removeNav($crawler);

        return $crawler->saveHTML();
    }

    protected function removeNav(HtmlPageCrawler $crawler)
    {
        $crawler->filter('div.flex-shrink-0.hidden')->remove();
        $crawler->filter('div[role="navigation"]')->remove();
    }
}
