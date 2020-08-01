package com.example.mind_optimizers_android_app;


import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

public class ResourcesActivity extends AppCompatActivity {

    TextView resources;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_resources);

        resources = findViewById(R.id.Resources1);

        resources.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "http://www.swavlambancard.gov.in/";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        resources = findViewById(R.id.Resources2);

        resources.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "https://www.scpwd.in/";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        resources = findViewById(R.id.Resources3);

        resources.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "http://www.nhfdc.nic.in/";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        resources = findViewById(R.id.Resources4);

        resources.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "https://sjsa.maharashtra.gov.in/en/maharashtra-state-handicapped-finance-and-development-corporation";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        resources = findViewById(R.id.Resources5);

        resources.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "https://www.aicb.org.in/";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        resources = findViewById(R.id.Resources6);

        resources.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "http://uphwd.gov.in/en";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        resources = findViewById(R.id.Resources7);

        resources.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "http://www.internationaldisabilityalliance.org/dpo-empowerment";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        resources = findViewById(R.id.Resources8);

        resources.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "http://www.internationaldisabilityalliance.org/dpo-empowerment";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        resources = findViewById(R.id.Resources9);

        resources.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "https://www.right-to-education.org/issue-page/marginalised-groups/persons-disabilities";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        resources = findViewById(R.id.Resources10);

        resources.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "https://www.iddcconsortium.net/";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

    }
}
