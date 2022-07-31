package org.weremkocompany.hydrozagadka.entity;


import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
@NoArgsConstructor
@AllArgsConstructor
@Table
public class Farm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, nullable = false)
    protected Long id;

    @Column(updatable = true, nullable = true)
    protected String name;

    @Column(updatable = true, nullable = true)
    protected String owner;

    @Column(updatable = true, nullable = true)
    protected String url;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Farm farm = (Farm) o;
        return id != null && Objects.equals(id, farm.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}