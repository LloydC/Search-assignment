import React from 'react';
import Search from './Search';

export default {
    component: Search,
    title: 'Search',
  };

export const DefaultSearch = () => <Search suggestions={[{searchterm: 'kenzo trui', nrResults: 62}, {searchterm: 'kenzo trui dames', nrResults: 21}, {searchterm: 'kenzo trui heren', nrResults: 12}]} query='kenzo' setQuery={()=>{}} />;

// const Template = args => <Search {...args} />;

// export const Default = Template.bind({});

// Default.args = {
//     suggestions: [{
//         searchterm: 'daily paper trui',
//         nrResults: 2,
//     }],
//     query: 'daily',
//     setQuery: ()=>{}
// };