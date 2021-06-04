import React from 'react';
import PropTypes from 'prop-types';

import { graphql, useStaticQuery } from 'gatsby';

import CategoryList from '@components/CategoryList';

const query = graphql`
  {
    allMarkdownRemark {
      group(field: frontmatter___category) {
        category: fieldValue
      }
    }
  }
`;

function CategoryListContainer() {
  const { allMarkdownRemark } = useStaticQuery(query);
  const categories = [
    {
      text: 'all',
      link: '/',
    },
    ...allMarkdownRemark.group.map(({ category }) => ({
      text: category,
      link: `/category/${category}`,
    })),
  ];
  return <CategoryList categories={categories} />;
}

CategoryListContainer.propTypes = {};
CategoryListContainer.defaultProps = {};

export default CategoryListContainer;
