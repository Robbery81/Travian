import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  pathD = [
    'M223 109c-14.5 4.4-17.7 5.5-18.8 6.3-1.9 1.5-7.4 4.6-10.2 5.8-1.4.6-3.8 1.7-5.5 2.4-1.6.7-5 1.9-7.4 2.7-5.7 1.7-6.9 3.5-4.8 7.7 1.2 2.3 1.3 3.9.6 6.3-1.2 4.2-.3 6.7 2.6 7.4 2 .5 2.5 1.4 3.1 6 .7 5.6 3.4 10.4 6 10.4.8 0 2.2.9 3.1 2 1 1.1 2.9 2 4.3 2s4.8.9 7.6 1.9c3.1 1.2 10.2 2.4 18 3.1 7.1.6 16 1.5 19.7 2 8.1 1 10 .3 15.6-6.2 4-4.4 8-6.5 16.5-8.4 3.3-.8 4.1-1.4 4.8-4.1.5-1.8 1.7-3.4 2.8-3.8 2.4-.8 2.5-1.8.5-4.9-1.2-1.8-1.3-2.9-.5-5.2.8-1.9.8-3.5.1-4.9-.5-1.1-1.2-4.5-1.6-7.7-.6-5.4-.8-5.7-4.4-7.2-3.5-1.3-7.4-5-8.3-7.7-.2-.6-2.6-1.2-5.3-1.4-2.8-.1-5.7-.5-6.5-.8-1.6-.7-20.1-3.6-26-4.1-1.9-.2-4.6 0-6 .4z',
    'M145.5 5.1c-2.2.4-4.4.5-4.8.2-.4-.3-1.6-.2-2.5.2-.9.4-4.2.7-7.3.6-3.2-.2-6 .2-6.3.8-.4.5-2 .9-3.7.9-1.7-.1-3.5.5-3.9 1.3-.6.8-2.4 1.3-4.9 1.2-2.2-.1-4.3.2-4.6.8-.4.5-2.3.9-4.3.9s-4.6.7-5.6 1.5-2.3 1.2-2.7.9c-.5-.2-2.6.4-4.8 1.5-2.1 1.1-5.8 2.3-8 2.7-2.3.4-4.1 1-4.1 1.5s-1.4.9-3 .9c-1.9 0-3.3.6-3.7 1.6-.4 1.1-1.4 1.4-3.4 1-2.1-.4-3.6.1-5.9 2-1.6 1.4-3 2.2-3 1.7 0-.6-3-.8-7.2-.4-.5.1-.8.9-.8 1.9 0 1.6-5.4 7.6-7.2 7.8-.4.1-1.2.2-1.7.3-.5 0-1.2 1.4-1.6 3.1-.4 1.6-1.1 3.2-1.6 3.5-.5.4-.9 1.4-.9 2.5 0 1.3-.5 1.7-1.9 1.3-2.3-.6-6.1 2.5-6.1 4.9 0 1 .7 1.8 1.6 1.8.9 0 1.8.9 2.1 2 .7 2.6 1.2 2.5 5.8-.6 2.1-1.4 4.6-2.3 5.6-2.1 1.2.3 3.2-.8 5.5-3 2-1.9 4.8-4.1 6-5 2.2-1.4 2.6-1.3 5.9 1.6 4 3.4 4.6 3.6 6.3 1.9.9-.9 1.7-.5 3.6 1.5 3.1 3.3 4.2 3.3 8.6.4 1.9-1.3 5.5-2.9 7.8-3.7 3.2-1 5.9-3.1 10.2-7.8l5.8-6.5 4.9 4c2.6 2.1 6.5 5 8.5 6.4 2.1 1.3 3.8 2.8 3.8 3.2 0 1.1 6.4 3.7 9.2 3.7 1.2 0 3.2-1 4.5-2.2 1.7-1.6 2.8-1.9 3.7-1.3 9.5 6.9 12.8 8.7 13.9 7.6 1.6-1.6 3.4-1.4 6.5.9 1.5 1.1 5.1 2.3 8 2.7 2.9.3 5.5 1 5.8 1.5.3.4 3.3.6 6.7.2 4.3-.4 7.8-.2 11.4.9 2.8.9 5.4 1.3 5.6 1 .3-.2 1.4 0 2.5.6 1.5.8 2.2.8 2.6-.2.3-.9.9-.7 1.9.5 2.7 3.4 7 2 9.3-2.8 1.7-3.6 1.4-6.6-.9-9.9-1.3-1.7-1.8-1.8-4.2-.7-1.6.7-2.4.8-2 .2.4-.6.1-1.7-.5-2.5-.7-.8-1-2.2-.6-3 .3-.9 0-1.8-.8-2.1-1.8-.7-2.8-6.1-1.6-8.5.6-1.1 2.1-1.9 3.5-1.9 4.8 0 7.3-2 7.7-6.1.2-2.2 0-4.3-.5-4.8-.4-.4-.1-1.4.8-2.1 1.7-1.4 2-4 .5-4-.5 0-1-.9-1-2 0-2-4.6-5.8-5.7-4.7-.3.4-1.8-.2-3.2-1.2-2.5-1.7-8.1-1.9-12.1-.4-.8.3-2.5.5-3.7.4-1.2-.1-3.2.3-4.4.9-1.5.9-2.4.9-3.2.1-.6-.6-2.9-1.1-5.1-1.1-2.2 0-5.4-.5-7.2-1.2-2.9-1-3.6-.9-5.3.6-1.6 1.4-2.3 1.5-4.1.6-1.3-.7-3.7-.9-5.8-.5-1.9.3-3.8.3-4.1-.2-.3-.5-2.4-.6-4.6-.2zM203 57.4c0 .2-.7.7-1.6 1-.8.3-1.2.2-.9-.4.6-1 2.5-1.4 2.5-.6z',
    'M239.5 9.1c-2.7 1.7-8.6 4.5-13 6.1-4.4 1.6-8.8 3.7-9.7 4.5-1.9 1.7-2.2 5.9-1.1 15.3.6 5.2 1 5.8 8 12.6 4.1 3.9 8 8.2 8.7 9.5 1.8 3.8 10.9 5.7 28.5 6 13 .3 15.2.1 17.7-1.5 4.4-2.8 6.3-5.7 5.7-8.7-.4-2.2-.1-2.7 2.4-3.2 5.9-1.2 6.7-2.7 6.9-12.2.1-7.8-.2-9-2-10.7-5.2-4.7-8.6-8.4-9.1-9.8-1.4-3.9-12.4-8-22.5-8.4-2.5 0-5-.4-5.7-.9-.6-.4-3.1-1-5.5-1.3-3.7-.5-5-.1-9.3 2.7z',
    'M321.6 13.2c-2.6 1.9-2.9 2-3.8.5-1-1.8-8.2-2.4-9.2-.8-.3.5-2.5 1.2-4.8 1.5-5.3.8-6.7 1.6-7.1 4.1-.2 1.1-.8 2.9-1.4 4-.6 1.2-1.4 5.1-1.6 8.8-.4 5.6-.3 6.7 1 6.7 1.2 0 1.3.3.4 1.4-.7.8-1.3 2.9-1.4 4.8-.1 1.8-.5 3.7-.8 4.3-.8 1.3-1.9 5.8-1.6 6.6.1.3-.4 1.3-1.2 2.2-1.6 2-.8 4.7 1.5 4.7 1.3 0 1.4.3.4 1.5-1 1.2-.7 1.5 1.7 2 1.5.3 4.2 1.3 5.8 2.2 9.4 5.2 10.4 5.5 13.2 4.5 2.5-.9 3.1-.6 6.3 3l3.5 4L333 78c5.8-.7 13.5-1.1 17.1-1.1 6.4.1 6.6 0 10.2-3.9 1.9-2.2 4.2-4 5-4 .8 0 3.1 1.3 5.2 3 2.1 1.6 4.1 3 4.6 3 2.3 0 4.2-1.8 7.5-7.1 2.3-3.8 4.2-5.9 5.4-5.9 1 0 3.5 1.9 5.4 4.2 3.4 3.9 3.7 4.1 6 2.8 1.4-.7 3.2-1 4.2-.6s2.5-.3 4.2-1.9c1.3-1.4 3.1-2.5 3.8-2.5.8 0 1.4-.6 1.4-1.4 0-.7 1.4-2.3 3-3.6 1.7-1.3 3-2.8 3-3.4 0-.6 2.1-1.2 4.7-1.4 2.6-.2 5-.7 5.3-1.1.3-.4 1.3-1 2.3-1.4 2-.8 1.4-2.7-.9-2.7-1.1 0-1.2-.4-.4-1.9 2.1-4.1-5.2-11.9-7.5-8-.4.6-1.4.8-2.2.5-.8-.3-2.3-.1-3.4.4-1.4.8-1.9.7-1.9-.3 0-3.5-9.3-8.2-13.9-7-1.9.5-2.3.3-1.8-1 .8-2.2-1.1-3.4-7-4.2-3.9-.5-5.3-.4-5.3.5 0 1-.3 1-1.5 0-.8-.7-2.5-1-3.9-.6-1.5.4-2.8 0-3.7-1-.9-1.1-2.2-1.4-4.1-1-2.7.5-6.3-.7-15.3-5-1.7-.8-3.8-1.2-4.6-.9-.9.3-2.3-.3-3.4-1.5-2.1-2.3-4.5-2.6-6.4-.8-1 1.1-1.4 1-2.2-.5-.6-.9-1.9-1.7-2.9-1.7s-2.1-.4-2.4-.9c-.3-.5-2.3-1.2-4.3-1.6-2.1-.3-4.7-.8-5.8-1.1-1.1-.2-3.3.6-4.9 1.8z',
    'M99.2 40.9c-3.9 4.5-6.3 6.3-10 7.5-2.7.9-6.4 2.8-8.2 4.1-4.2 3.1-5.5 3.1-8.6 0-1.8-1.8-3.2-2.3-4.8-1.9-1.6.4-3.2-.3-5.3-2-1.7-1.4-3.4-2.6-3.8-2.6-.7 0-3.6 2.3-9.3 7-1.3 1.1-3.3 2-4.3 2-1.1 0-5 1.8-8.7 4-3.7 2.3-8.6 4.6-11 5.2-2.3.6-4.5 1.5-4.9 2.1-.9 1.5 4.4 5.7 7.4 5.7 1.8 0 2.4.4 2 1.4-.7 1.8 2.8 2.6 9.6 2.2 2.6-.1 5 0 5.2.4.2.4 3.2.1 6.6-.6 3.5-.7 6.6-1.1 7.1-.8 1.3.8.9 2.4-.5 2.4-2.5 0-7.2 2.8-10.6 6.4-4 4.2-3.6 5.4 1 3.1 2.9-1.5 3.1-1.5 2.6-.1-.4.9-.2 2.9.4 4.4.7 1.5 1.3 2.2 1.6 1.4.3-.6 1.1-1.2 1.9-1.2.9 0 1.2.4.9 1-.3.5.1 1 1 1 .8 0 2.1-1.1 2.7-2.5 1.2-2.7 2.4-3.2 3.1-1.3.3 1 .7 1 1.7.1 1-1 1.9-.8 4.2.8l2.9 2.1 3.9-3.6c4.2-3.7 8.8-4.8 10.7-2.4.6.7 1.4 3.1 1.8 5.3.8 4.6 3 6.6 6.4 5.8 2-.5 2.3-.3 1.8 1.1-.4.9-.2 1.6.3 1.6.6 0 1-.3 1-.8.1-.4.9-1.8 2-3 1.8-2.2 2.1-2.3 4.9-.9 1.9.9 3.3 1.1 3.9.5.6-.6 1.2-.6 1.7.2.9 1.4 3.5-.6 3.5-2.6 0-1.8 2-1.8 3.4 0 .6.8 2.4 1.8 3.9 2.2 2.4.5 2.9.3 3.4-1.5.5-2 .7-2.1 2.4-.5 1 .9 2.2 1.3 2.8 1 .5-.4 1.2-.2 1.6.4.3.5 1.7 1 3 1 1.8 0 2.3-.4 1.9-1.5-.5-1.1.1-1.5 2.5-1.5 3 0 3.1-.2 3.1-4 0-3.5.5-4.3 3.2-6 1.7-1 5.6-2.2 8.5-2.6 4.5-.5 5.8-.3 7.6 1.3 1.8 1.6 3 1.8 6.7 1.2 2.5-.4 7.1-.8 10.2-.8 5-.1 6.1-.5 8.8-3.1 2.7-2.6 3.8-3 8.5-3 3 0 5.5-.4 5.5-.8 0-.5 1.1-1.4 2.5-2 3.1-1.4 3.1-2.7.1-6.7-1.8-2.3-3.3-3.2-5.5-3.3-1.6 0-3.9-.5-5-1.1-2.7-1.5-13.4-1.4-16.6.1-3.3 1.5-8-.1-14.8-4.9-4.4-3.1-5.1-3.3-6.6-1.9-1.9 1.7-2.6 1.4-10.6-4.2-5.4-3.8-5.6-3.8-8-1.2-1 1.1-2.3 2-2.9 2-2.9 0-8.9-2.3-11-4.3-1.4-1.2-3.7-3.1-5.2-4.2s-4.7-3.5-7.1-5.3c-2.4-1.7-4.4-3.2-4.6-3.2-.1 0-2.6 2.7-5.5 5.9z',
    'M220.1 63.6c-1.7 1.2-2.2 2.4-1.9 4.5.3 2 0 2.9-.9 2.9-.8 0-1.1.5-.8 1 .7 1.1.5 1.2-6.7 3-3.4.9-4.8 1.8-4.8 3 0 .9.3 2 .6 2.3.4.3.8 2.1.9 4 .2 3.7 6.3 10.7 9.3 10.7 1 0 2.7.7 3.8 1.5 4.4 3 22.9 6.3 31.9 5.5 6.6-.6 6.9-.7 11.1-5.5 5.6-6.5 7-11.4 5.4-18.9-1-5.1-1-5.9.9-9l2.1-3.3-5.3-.7c-7.9-.9-11.5-.7-12 .6-.3 1-1.1 1-3.8.1-1.9-.7-7.4-1.5-12.4-1.8-4.9-.3-10.4-.8-12-1.1-1.9-.2-4 .2-5.4 1.2z',
    'M278.6 63.5c-1.1.8-2.7 1.5-3.6 1.5-.9 0-2.8 1.6-4.2 3.6-2.2 3-2.5 4.1-1.7 6.7 1.3 4.6 1.1 11.3-.5 15-.7 1.8-3.2 5.3-5.5 7.8-3.9 4.5-4 4.7-1.8 5.3 1.2.3 3.6.6 5.3.6 1.7 0 3.7.7 4.4 1.5.7.8 3.1 2 5.4 2.6 2.2.7 6 1.8 8.4 2.5 6.1 2 8.5 1.7 11.5-1 1.4-1.3 4.3-3 6.4-3.6 8.5-2.8 12.3-5.1 12.3-7.6 0-1.3.9-2.8 2-3.4 1.1-.6 2-1.9 2-2.9 0-2.2 2.4-4.3 6.8-6.1 3.9-1.5 4.2-3 .5-3-3.1 0-9.3-3.4-9.3-5 0-.5-.5-1-1.1-1-.6 0-1.7-.7-2.5-1.5s-2.1-1.2-2.8-.9c-1.8.7-9.8-2-9.5-3.2.1-.5-1.5-1.8-3.7-2.8-2.1-1-6-2.9-8.5-4.2-5.4-2.8-7.6-2.9-10.3-.9z',
    'M383.5 66.7c-5.3 9.1-8.1 10.4-12.5 5.8-3.5-3.8-7.2-3.3-10.9 1.4-1.7 2.1-3.1 4.3-3.1 4.8 0 1.1 4.3 5.3 5.4 5.3.4 0 2.4 1.3 4.4 3 2.1 1.6 5.1 3.2 6.9 3.6 2.4.5 3.7 1.7 5.8 5.5 4.5 8.4 12.9 12.4 23.1 11.3 8-.8 11.8-3.7 12.9-9.8.7-3.5 4.4-7.6 7-7.6.7 0 2.4-.9 3.8-2.1 2.3-1.7 2.5-2.3 1.4-4-.6-1-1.9-1.9-2.7-1.9-.8 0-3.2-1.1-5.1-2.5-2-1.3-3.9-2.2-4.2-1.9-.3.3-1.3-.8-2.2-2.6-.9-1.7-2.8-3.6-4.3-4.2-1.5-.6-3.7-1.5-5-2.1-1.6-.8-2.6-.7-3.4.1-2 2-3.9 1.4-7.9-2.8-2.2-2.2-4.5-4-5.3-4-.8 0-2.6 2.1-4.1 4.7z',
    'M45.5 92.9c-8 2-13.9 8.2-21.6 22.6-4.5 8.6-4.9 12.6-2.3 25.2.9 4.3 1.7 8.7 1.9 9.8.3 1.1 1.4 2.6 2.5 3.3 1.9 1.1 2.9.9 8.7-2.3 12-6.6 22.6-7.7 46.8-5 15.1 1.7 14.7 1.9 16.6-7.4 2.9-14.1-3.7-32.2-12.8-35.1-2.1-.7-7.4-2.8-11.8-4.7-8.9-3.9-19.9-7.4-23-7.2-1.1.1-3.3.4-5 .8z',
    'M112.1 98c-1.8.5-6.1 2.2-9.4 3.9-3.3 1.7-7.5 3.1-9.3 3.1-3.9 0-4.2.8-1.4 4.3 3 3.8 7 17 7 23-.1 4.6-.9 7.8-3.5 14-1.1 2.6 4.4 4.5 15.1 5.2 9.9.7 18.8-.7 30.8-5.1 8.7-3.1 12.1-5.1 13.6-8 .7-1.2 2.4-2.5 3.9-2.9 1.4-.3 3.6-1.8 4.9-3.2 1.8-2.2 2.2-3.8 2.2-9.8 0-11.9-3.8-19.2-12-22.7-3.8-1.7-7.1-2.1-21.5-2.3-9.3-.1-18.5.1-20.4.5z',
    'M352.3 80.6c-1.6 1.2-2.6 1.3-4.2.5-3.5-1.9-4.9-1.2-12.9 6.7-5.6 5.6-9.5 8.5-14.3 10.7-4.7 2.2-7 3.8-7.9 5.8-.7 1.6-1 3-.8 3.3.3.2 3.4 0 6.9-.5 5.1-.7 6.6-.6 7.2.5.5.8 1.2 1.2 1.7.9.4-.3 1.9 3 3.2 7.3 1.8 5.8 2.8 7.7 4.1 7.6 2.6-.3 2 .9-1.8 3.5-1.9 1.3-3.5 2.7-3.5 3.1 0 .4-1.3 1.3-2.9 2-3.2 1.3-4.9 4-2.6 4 1.1 0 1.2.5.5 2.6-.6 1.4-1 2.7-1 3 0 .9 5 .3 8.4-1.1 2-.9 4.1-1.3 4.6-1 .6.4 1.6.3 2.2-.1 1.9-1.2 4.8-1.2 4.1-.1-.4.6.5.7 2.1.3 1.6-.4 3.4-.2 4.1.4.8.6 1.6.7 1.9.2.3-.5 1.9-.8 3.5-.6 2.6.3 3.1-.1 4.1-3.1 1.2-3.8 1.1-3.8 12.2-1.3 3.9.8 5 .7 6.3-.6.9-.8 2.9-2.3 4.5-3.3 1.7-.9 3-2.4 3-3.3 0-1.4 7-5 9.8-5 .8 0 5.2-3.8 10-8.5 8.1-8.1 10-11 5.2-8.5-1.2.6-4.4 1.5-7.2 1.9-9.4 1.5-19.8-3.7-23.6-11.8-1.2-2.6-2.7-3.9-5.2-4.7-1.9-.6-4.9-2.5-6.8-4.3-1.9-1.7-3.9-3.1-4.6-3.1-.7 0-2.3-1.1-3.6-2.5-2.7-2.9-3.6-3-6.7-.9z',
    'M426.5 88c-1 1.1-2.6 2-3.5 2-3 0-5.6 3.2-8.5 10.8-2.3 5.8-4 8.3-8.3 12.3-6 5.6-6.2 7.4-.7 8.5 3.9.7 5.5 2.6 4.7 5.7-.4 1.7-.2 1.9 1.9 1.2 3.3-1 5.1-1 14.4.5 6.8 1.1 10.4 1.1 23.4-.2 8.4-.9 15.8-2.1 16.3-2.6.7-.7.1-1.9-1.8-3.6-4.2-3.7-11.7-8.6-13.4-8.6-.8 0-2.5-.8-3.8-1.8-2.2-1.7-2.1-1.8 4.8-1.4 3.8.2 8.5.1 10.4-.2 3.8-.7 9-5.2 9.9-8.5.5-1.9-.1-2.5-4.1-4.1-2.6-1.1-6-2.7-7.7-3.6-1.6-.8-3.1-1.1-3.3-.6-.4 1.3-12.7-1.3-15.9-3.4-7.5-5-11.8-5.7-14.8-2.4z',
    'M46.4 146.9c-12.3 3.1-21.7 9.7-25.7 18.1-1.7 3.7-2.1 6.3-2 14.6.1 11.4 1.5 15.4 8.4 23.4 2.1 2.5 5.1 6 6.6 7.8 1.6 1.8 5.3 5.3 8.3 7.8 5.5 4.6 5.5 4.6 11.3 4 6.8-.7 11.2-2.7 12-5.6.3-1.1 1.3-2.3 2.4-2.7 1-.4 5.1-3.1 9.2-6 4-2.9 9-5.7 11-6.3 6.6-1.9 19.9-4 21.5-3.4 2.1.8 2.1-1 0-2.7-3.1-2.5-10.2-12.5-13.8-19.3-4.1-7.7-4.7-14.5-2.1-23.1.8-2.7 1.3-5 1.1-5.2-.7-.8-17.3-2.4-28.6-2.8-9.9-.3-14-.1-19.6 1.4z',
    'M148 143.9c-5 2.7-9.2 4-20 6.6-9.5 2.2-11.6 2.3-22 1-11.4-1.3-11-1.4-12.6 3-3.7 10.7 1.1 24.8 13.3 38.4 5.7 6.4 8 6.9 27.4 7 11.2.1 12.8-.1 14.9-1.9 1.3-1.1 3.1-2 4.2-2 1 0 3.7-1.8 6-4.1 2.4-2.2 5.9-5.2 7.9-6.5 4.2-2.9 6.3-6.8 7.7-14.3 1.2-7.1-.7-10.4-9.1-15.9-8-5.3-11.7-8.8-11.7-11.2 0-2.5-1.5-2.5-6-.1z',
    'M272.5 164.2c-1.1.7-3.2 1.1-4.6.9-2.7-.2-6.4 3.3-5.3 5.1.3.4.1.8-.4.8s-2.6 1.6-4.6 3.6c-3.9 3.8-4.8 3.9-14.1 1.9-1.6-.4-3.9-.6-5-.6s-3.3.1-4.9.1c-1.5 0-3.4.5-4.2 1.1-.7.6-2.9 1.5-4.8 1.9-3.2.7-3.5.6-3.3-1.3.1-1.4-.5-2.3-1.8-2.5-1.1-.3-3.1-1.3-4.4-2.3-1.5-1.2-3.2-1.7-4.4-1.3-1.1.3-2.9.2-4.1-.4-6.1-2.8-7.8-3.2-9.6-2.2-1 .5-2.5.7-3.4.4-1.4-.6-2.2.1-8.4 7-3 3.4-3.1 3.9-1.8 6.4.7 1.5 1.6 3.9 2 5.4.3 1.6 1.1 2.8 1.6 2.8 1.3 0 1.3 3.7 0 4.5-1.4.8-1.3 4.8.2 6.3.6.6 1.4 3.1 1.7 5.4.4 3 1.1 4.4 2.4 4.6 1 .2 2.8 1.4 4.1 2.7 4.3 4.3 13.1 4.6 21.6.7 11.6-5.2 11.7-5.2 14.2-3.3 3.8 3 13.8 7.7 23.6 11 8.2 2.8 10.1 3.1 16 2.6 5.6-.6 7.9-.3 14.6 1.9 12.2 4 16.3 3.1 15.4-3.4-.3-1.8.1-3.5.9-4.1 1.6-1.4 1.7-4.1.1-5.7-.8-.8-.8-1.5.1-2.6.7-.8 1.1-2.7.9-4.3-.2-2.2-.9-2.9-3-3.1-1.8-.2-2.8-.9-2.8-2 0-.9-.3-2.7-.6-3.8-.5-1.7 0-2.4 2.5-3.2 2.3-.8 3.1-1.8 3.7-4.6.8-4.5-1.9-11.1-4.3-10.2-6.7 2.6-9.4 1.2-6.6-3.4 2.4-4.1.3-10.4-4-12-4.5-1.8-12.8-2.2-15.2-.8z',
    'M384 146c-3 .4-8.2 1.4-11.5 2.3-16.6 4.3-28.9 5.3-40.8 3.4-3.4-.5-12.8 1.1-14.5 2.6-.8.6-1.2 2.3-1 3.9.4 2.3 0 2.8-2.3 3.3-4.9 1.1-5.4 2.7-3.4 11.1 1.4 6.1 2.5 8.2 5.3 11 2 1.9 4.5 3.7 5.6 3.9 1.2.3 7.5 1.6 14.1 3 24.3 5.2 25.3 5.5 33.3 10.8 4.2 2.8 9.3 6 11.2 7 1.9 1.1 5 3 6.7 4.3 2.6 2 4.6 2.5 9.9 2.6 6.3.1 6.7 0 8.1-2.6 1.2-2.2 1.9-2.6 3.6-2.1 1.2.4 4.3 1.1 6.9 1.7l4.7 1 6-5.3c6.4-5.6 6.5-5.8 7.6-17.9.2-2.5.9-7.9 1.4-12 .5-4.1.7-7.7.3-8-.4-.3-1.8-2.7-3.1-5.3-3.6-7.1-8.3-10.8-20.6-16.3-1.6-.7-6.7-1.6-11.1-1.9-4.5-.2-8.8-.6-9.5-.8-.8-.3-3.9-.1-6.9.3z',
    'M152.3 209.4c.7 1.8-2 2.5-11.9 3.1-7.5.5-11.7 2.1-9.4 3.5 1.7 1.1-3.4 5.8-7.3 6.8-1.8.4-3.6 1.8-4.2 2.9-.9 2.2-9.8 6.3-13.6 6.3-1 0-2.6.9-3.6 1.9-1.1 1.1-4.4 2.4-8.3 3.1-9.3 1.7-10.5 2.4-10.7 6.8-.2 3.4.1 3.8 4 5.7 3.5 1.6 4.3 2.6 4.5 5.1.3 2.8.9 3.4 5 4.9 9.3 3.3 12 4.8 12.5 6.6.3 1.1 1.4 1.9 2.6 1.9 1.1 0 5 1.3 8.6 3 3.6 1.6 7 3 7.7 3 .6 0 2.5.9 4.2 1.9 1.7 1.1 5.1 2.4 7.6 3.1 2.5.6 6.9 2.3 9.7 3.6 2.9 1.3 8.6 2.9 12.6 3.4 9 1.1 12.8 2.5 13.4 4.9.4 1.6 1.6 1.8 10.5 1.9 8.3.1 11-.2 15.2-2 2.8-1.2 5.7-3.1 6.5-4.1 1.8-2.5 10.8-6.7 14.4-6.7 1.5 0 2.7-.4 2.7-.9 0-1.9-5.1-6.1-7.4-6.1-1.9 0-7.1-3.4-11.6-7.7-.2-.2.2-.8.9-1.2 2-1.2.8-2.6-5.4-6.1-4.9-2.8-6.9-4.9-4.7-5 .4-.1 1.7-.9 3-2 1.9-1.6 2.1-2.3 1.3-3.9-.6-1.1-2-2.3-3.1-2.6-2.4-.8-2.6-3.1-.4-4.3.9-.5 1.8-2.3 2-4.1.3-2.5-.2-3.7-2.4-5.6-1.5-1.3-3.8-2.7-5.2-3-2.2-.6-8.3-4-18-10-4.9-3.1-19-9.5-20.7-9.5-.9 0-1.3.6-1 1.4z',
    'M227.6 213.2c-1.1.6-3.9 1.2-6.3 1.4-3 .2-5 .9-6.3 2.4-1 1.2-2.2 2-2.7 1.9-1.5-.5-5.3 6.4-5.3 9.7 0 1.9.4 3.4.9 3.4 1.2 0 .2 3.8-1.6 6.7-1.5 2.2-1 6.3.8 6.3.5 0 .9.8.9 1.7 0 1 1.6 3.8 3.5 6.2 1.9 2.4 3.5 4.8 3.5 5.3s.3.7.8.4c.4-.2 1.6.2 2.6 1 1.6 1.1 1.8 1.8.8 3.8-.9 2-.8 2.7.4 3.7.9.7 2.5 3.4 3.6 5.9 1.5 3.5 2.5 4.6 4.2 4.6 1.5-.1 2.2.6 2.4 2.3.2 1.3 1.2 2.5 2.1 2.8 1.3.3 1.7 1.1 1.3 3-.3 1.7.1 3 1 3.7.9.6 1.7 2 1.9 3.1.3 1.3 1.4 2.1 3.2 2.3 1.5.2 2.7.9 2.7 1.8 0 .8.6 1.4 1.4 1.4.8 0 1.7.7 2 1.6.5 1.3 2.1 1.5 9.6 1.3 7-.2 9.3 0 10.7 1.3 2.8 2.5 10.2 2.2 12.4-.5 1-1.2 1.8-2.7 1.9-3.3 0-.6 1.1-1.6 2.5-2.2 1.4-.6 2.5-1.6 2.5-2.2 0-.7.7-1.8 1.5-2.6 2.1-2.1 1.9-5.1-.4-6.6-1.7-1-1.9-2-1.4-6.9.4-4.3.1-6.2-1.2-8.3l-1.7-2.6h4.7c6.3 0 8-1.1 10.1-6.7 1-2.6 2.6-5.5 3.6-6.5 2.2-2.2 2.4-6.4.3-7.5-1.6-.9-3-9.3-1.6-9.3 1 0 2.5-5 1.7-5.7-.2-.2-2.3-.7-4.6-.9-2.3-.3-6.5-1.5-9.4-2.6-4-1.6-7.1-2.1-14.4-2-8 .1-10.7-.3-18-2.9-9.7-3.3-20.8-8.4-21.7-9.9-.8-1.3-2.5-1.2-4.9.2z',
    'M310 188.5c0 1.6.6 2.5 1.5 2.5.8 0 1.5.4 1.5 1 0 .5-.8 1-1.8 1-2.7 0-4.2 2-4.2 5.7 0 2.8.5 3.5 3.5 4.7 2.5 1.1 3.3 1.9 2.9 3-.4 1-.1 1.6.7 1.6.8 0-.5.9-2.8 2.1-3.5 1.7-4.3 2.6-4.3 4.9 0 1.6-1.1 4.2-2.5 5.9-2.4 2.7-2.6 3.8-2.6 12.8 0 5.4.2 12.6.5 16.1.5 6.2.5 6.4-2.4 8-1.7.9-3 2.2-3 2.9 0 .7-1.3 2.8-3 4.6-1.6 1.9-3 4-3 4.6 0 .6-1.1 1.8-2.5 2.7-4.1 2.7-3.1 4.6 4.3 8.3 6.7 3.3 6.9 3.4 19.6 3.2 7-.1 14.4.4 16.4 1 3.3.9 4.8.7 11.2-1.6 4.1-1.4 8.5-2.9 9.8-3.2 1.2-.3 2.2-.9 2.2-1.4 0-.5.6-.9 1.4-.9.8 0 1.6-.3 1.8-.8.2-.4 4.1-3.6 8.8-7.1 5.6-4.2 10.3-6.9 13.9-7.9 3.8-1.1 6.6-2.8 9.1-5.3 2-2.1 5.4-4.5 7.7-5.4 2.2-.9 4.1-2.3 4.2-3.3.5-4.5.2-6.4-1.4-7.6-2-1.4-1.7-3.4 1-5.8 1.6-1.4 1.7-1.8.5-1.9-.8-.1-1.9-.3-2.5-.4-.5-.2-1.7-.3-2.5-.4-4.3-.4-4.2-1.8.4-6.6 2.5-2.6 4.6-5 4.6-5.5 0-1.6-2.6-2.8-7.5-3.5-5.2-.8-16.7-6.3-15.9-7.7.3-.4-2.2-2.1-5.5-3.7-3.3-1.7-6.3-3.6-6.6-4.2-1.3-1.9-9.9-5-16.5-5.9-7.2-.9-15.9-3.1-26.6-6.6-9.1-3.1-10.4-3.1-10.4.1z'
  ];
  buildingSlots = [3, 2, 0, 1, 2, 3, 5, 4, 1, 0, 3, 2, 0, 1, 2, 3, 5, 4];
  constructor() {}

  ngOnInit(): void {}
}
